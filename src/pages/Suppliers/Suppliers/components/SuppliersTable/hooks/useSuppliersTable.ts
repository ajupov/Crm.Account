import { addUtcKind, getDateTimeAsRecently } from '../../../../../../utils/dateTime/dateTimeUtils'
import { calculateOffset, calculatePage } from '../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import Supplier from '../../../../../../../api/suppliers/models/Supplier'
import SuppliersContext from '../../../contexts/SuppliersContext/SuppliersContext'
import SuppliersRoutes from '../../../routes/SuppliersRoutes'
import { TableBodyRowProps } from '../../../../../../components/common/collections/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../components/common/collections/Table/TableHeader'
import { getFileNameWithDateTime } from '../../../../../../helpers/fileNameHelper'
import useSupplierView from '../../SupplierView/hooks/useSupplierView'

interface UseSuppliersTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (suppliers: Supplier[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

// TODO: Move to l10n
const useSuppliersTable = (): UseSuppliersTableReturn => {
    const state = useContext(SuppliersContext)
    const { onClickDelete, onClickRestore } = useSupplierView()

    const onClickDownloadAsCsv = useCallback(async () => {
        const suppliers = (await state.getAll())?.suppliers
        if (!suppliers) {
            return
        }

        const fileName = getFileNameWithDateTime('Поставщики')
        const headers = ['Идентификатор', 'Имя', 'Телефон', 'Email', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...suppliers])

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
        (suppliers: Supplier[]) =>
            suppliers.map(
                supplier =>
                    ({
                        id: supplier.id,
                        cells: [
                            { value: supplier.name, textAlign: 'left' },
                            { value: supplier.phone, textAlign: 'left' },
                            { value: supplier.email, textAlign: 'left' },
                            {
                                value: supplier.createDateTime
                                    ? getDateTimeAsRecently(addUtcKind(supplier.createDateTime))
                                    : '',
                                textAlign: 'center'
                            }
                        ],
                        isDeleted: supplier.isDeleted,
                        viewLink: SuppliersRoutes.View,
                        editLink: SuppliersRoutes.Edit,
                        onClickDeleteButton: onClickDelete,
                        onClickRestoreButton: onClickRestore
                    } as TableBodyRowProps)
            ),
        [onClickDelete, onClickRestore]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Name',
                label: 'Название',
                width: 5,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
            },
            {
                key: 'Phone',
                label: 'Телефон',
                width: 2,
                onClick: () => onClickSort('Phone'),
                orderBy: getOrderBy('Phone')
            },
            {
                key: 'Email',
                label: 'Email',
                width: 3,
                onClick: () => onClickSort('Email'),
                orderBy: getOrderBy('Email')
            },
            {
                key: 'CreateDateTime',
                label: 'Создан',
                width: 3,
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

export default useSuppliersTable
