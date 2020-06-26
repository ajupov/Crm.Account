import { calculateOffset, calculatePage } from '../../../../../../../utils/pagination/paginationUtils'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import ProductStatus from '../../../../../../../../api/products/models/ProductStatus'
import ProductStatusesContext from '../../../contexts/ProductStatusesContext/ProductStatusesContext'
import { ProductStatusesRoutes } from '../../../routes/ProductStatusesRoutes'
import { TableBodyRowProps } from '../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/Table/TableHeader'
import { toLocaleDateTime } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { useHistory } from 'react-router'
import useProductStatusView from '../../ProductStatusView/hooks/useProductStatusView'

interface UseProductStatusesTableReturn {
    page: number
    headers: TableHeaderCellProps[]
    map: (statuses: ProductStatus[]) => TableBodyRowProps[]
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductStatusesTable = (): UseProductStatusesTableReturn => {
    const history = useHistory()
    const state = useContext(ProductStatusesContext)
    const { onClickEdit, onClickDelete, onClickRestore } = useProductStatusView()

    const onClickCreate = useCallback(() => history.push(ProductStatusesRoutes.Create), [history])

    const onClickView = useCallback((id: string) => history.push(`${ProductStatusesRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const statuses = (await state.getAll())?.statuses
        if (!statuses) {
            return
        }

        const fileName = 'Статусы'
        const headers = ['Идентификатор', 'Наименование', 'Удален', 'Создан', 'Изменен']
        const csv = convertObjectToCSV([headers, ...statuses])

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
        (page: number): void =>
            state.setRequest({ ...state.request, offset: calculateOffset(page, state.request.limit) }),
        [state]
    )

    const map = useCallback(
        (statuses: ProductStatus[]) =>
            statuses.map(
                status =>
                    ({
                        id: status.id,
                        cells: [
                            { value: status.name, textAlign: 'left' },
                            { value: toLocaleDateTime(status.createDateTime), textAlign: 'center' }
                        ],
                        isDeleted: status.isDeleted,
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
                key: 'Name',
                label: 'Наименование',
                width: 10,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
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

export default useProductStatusesTable
