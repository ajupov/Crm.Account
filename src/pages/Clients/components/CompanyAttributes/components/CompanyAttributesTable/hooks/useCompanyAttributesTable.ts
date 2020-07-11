import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import CompanyAttribute from '../../../../../../../../api/companies/models/CompanyAttribute'
import CompanyAttributesContext from '../../../contexts/CompanyAttributesContext/CompanyAttributesContext'
import CompanyAttributesRoutes from '../../../routes/CompanyAttributesRoutes'
import { TableBodyRowProps } from '../../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/common/collections/Table/TableHeader'
import { getAttributeTypeName } from '../../../../../../../helpers/entityAttributeTypeHelper'
import { getFileNameWithDateTime } from '../../../../../../../helpers/fileNameHelper'
import { toLocaleDateTime } from '../../../../../../../utils/dateTime/dateTimeUtils'
import useCompanyAttributeView from '../../CompanyAttributeView/hooks/useCompanyAttributeView'
import { useHistory } from 'react-router'

interface UseCompanyAttributesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (attributes: CompanyAttribute[]) => TableBodyRowProps[]
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useCompanyAttributesTable = (): UseCompanyAttributesTableReturn => {
    const history = useHistory()
    const state = useContext(CompanyAttributesContext)
    const { onClickEdit, onClickDelete, onClickRestore } = useCompanyAttributeView()

    const onClickCreate = useCallback(() => history.push(CompanyAttributesRoutes.Create), [history])

    const onClickView = useCallback((id: string) => history.push(`${CompanyAttributesRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const attributes = (await state.getAll())?.attributes
        if (!attributes) {
            return
        }

        const fileName = getFileNameWithDateTime('Атрибуты контакта')
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
        (attributes: CompanyAttribute[]) =>
            attributes.map(
                attribute =>
                    ({
                        id: attribute.id,
                        cells: [
                            { value: getAttributeTypeName(attribute.type), textAlign: 'left' },
                            { value: attribute.key, textAlign: 'left' },
                            { value: toLocaleDateTime(attribute.createDateTime), textAlign: 'center' }
                        ],
                        isDeleted: attribute.isDeleted,
                        onClickRow: onClickView,
                        onClickEditButton: onClickEdit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickEdit, onClickRestore, onClickView]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Type',
                label: 'Тип',
                width: 4,
                onClick: () => onClickSort('Type'),
                orderBy: getOrderBy('Type')
            },
            {
                key: 'Key',
                label: 'Наименование',
                width: 6,
                onClick: () => onClickSort('Key'),
                orderBy: getOrderBy('Key')
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

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return { page, headers, map, onClickCreate, onClickDownloadAsCsv, onClickChangePage }
}

export default useCompanyAttributesTable
