import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import SupplierAttribute from '../../../../../../../api/suppliers/models/SupplierAttribute'
import SupplierAttributesContext from '../../../contexts/SupplierAttributesContext/SupplierAttributesContext'
import SupplierAttributesRoutes from '../../../routes/SupplierAttributesRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getAttributeTypeName } from '../../../../../../helpers/entityAttributeTypeHelper'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useSupplierAttributeView from '../../SupplierAttributeView/hooks/useSupplierAttributeView'

interface UseSupplierAttributesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (attributes: SupplierAttribute[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useSupplierAttributesTable = (): UseSupplierAttributesTableReturn => {
    const state = useContext(SupplierAttributesContext)
    const { onClickDelete, onClickRestore } = useSupplierAttributeView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const attributes = (await state.getAll())?.attributes
        if (!attributes) {
            return
        }

        const fileName = getFileNameWithDateTime('Атрибуты поставщика')
        const headers = ['Идентификатор', 'Тип', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...attributes])

        downloadAsCsv(fileName, csv)
    }, [state])

    const onClickSort = useCallback(
        (columnName: string) => {
            if (state.request.sortBy !== columnName) {
                state.setRequest({ ...state.request, sortBy: columnName, orderBy: 'asc' })
            } else {
                state.setRequest({ ...state.request, orderBy: state.request.orderBy === 'asc' ? 'desc' : 'asc' })
            }
        },
        [state]
    )

    const getOrderBy = useCallback(
        (columnName: string) => {
            if (state.request.sortBy === columnName) {
                return state.request.orderBy
            }

            return void 0
        },
        [state.request.orderBy, state.request.sortBy]
    )

    const onClickChangePage = useCallback(
        (page: number) => state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const map = useCallback(
        (attributes: SupplierAttribute[]) =>
            attributes.map(
                attribute =>
                    ({
                        id: attribute.id,
                        cells: [
                            { value: attribute.key, textAlign: 'left' },
                            { value: getAttributeTypeName(attribute.type), textAlign: 'left' },
                            {
                                value: attribute.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(attribute.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: attribute.isDeleted,
                        viewLink: SupplierAttributesRoutes.View,
                        editLink: SupplierAttributesRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Key',
                label: 'Наименование',
                width: 6,
                onClick: () => onClickSort('Key'),
                orderBy: getOrderBy('Key')
            },
            {
                key: 'Type',
                label: 'Тип',
                width: 4,
                onClick: () => onClickSort('Type'),
                orderBy: getOrderBy('Type')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 4,
                onClick: () => onClickSort('CreateDateTime'),
                orderBy: getOrderBy('CreateDateTime')
            }
        ],
        [getOrderBy, onClickSort]
    )

    const page = useMemo(
        () => calculatePage(state.request.offset, state.request.limit),
        [state.request.limit, state.request.offset]
    )

    return { page, headers, map, onClickDownloadAsCsv, onClickChangePage }
}

export default useSupplierAttributesTable
