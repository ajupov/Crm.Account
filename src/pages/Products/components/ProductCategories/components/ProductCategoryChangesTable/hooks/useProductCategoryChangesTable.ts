import { calculateOffset, calculatePage } from '../../../../../../../helpers/paginationHelper'
import { convertObjectToCSV, downloadAsCsv } from '../../../../../../../utils/csv/csvUtils'
import { useCallback, useContext, useMemo } from 'react'

import { ProductCategoriesRoutes } from '../../../routes/ProductCategoriesRoutes'
import ProductCategoryChange from '../../../../../../../../api/products/models/ProductCategoryChange'
import ProductCategoryChangesContext from '../../../contexts/ProductCategoryChangesContext/ProductCategoryChangesContext'
import { TableBodyRowProps } from '../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/Table/TableHeader'
import { toLocaleDateTime } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { useHistory } from 'react-router'

interface UseProductCategoryChangesTableReturn {
    page: number
    limit: number
    total: number
    headers: TableHeaderCellProps[]
    map: (categories: ProductCategoryChange[]) => TableBodyRowProps[]
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductCategoryChangesTable = (): UseProductCategoryChangesTableReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoryChangesContext)

    const onClickView = useCallback((id: string) => history.push(`${ProductCategoriesRoutes.View}/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(async () => {
        const changes = (await state.getAll())?.changes
        if (!changes) {
            return
        }

        const fileName = 'История'
        const headers = [
            'Идентификатор',
            'Идентификатор пользователя',
            'Идентификатор категории',
            'Дата создания',
            'Старое значение',
            'Новое значение'
        ]
        const csv = convertObjectToCSV([headers, ...changes])

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
        (changes: ProductCategoryChange[]): TableBodyRowProps[] =>
            changes.map(change => ({
                id: change.id,
                cells: [
                    { value: change.oldValueJson, textAlign: 'left' },
                    { value: change.newValueJson, textAlign: 'left' },
                    { value: toLocaleDateTime(change.createDateTime), textAlign: 'center' }
                ],
                onClickRow: onClickView
            })),
        [onClickView]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'OldValueJson',
                label: 'Старое значение',
                width: 8,
                onClick: () => onClickSort('OldValueJson'),
                orderBy: getOrderBy('OldValueJson')
            },
            {
                key: 'NewValueJson',
                label: 'Новое значение',
                width: 8,
                onClick: () => onClickSort('NewValueJson'),
                orderBy: getOrderBy('NewValueJson')
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

    const page = useMemo(() => calculatePage(state.request.offset, state.request.limit), [
        state.request.limit,
        state.request.offset
    ])

    return {
        page,
        limit: state.request.limit,
        total: state.total,
        headers,
        map,
        onClickDownloadAsCsv,
        onClickChangePage
    }
}

export default useProductCategoryChangesTable
