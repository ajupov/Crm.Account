import { calculateOffset, calculatePage } from '../../../../../../../helpers/paginationHelper'
import { useCallback, useContext, useMemo } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import ProductCategory from '../../../../../../../../api/products/models/ProductCategory'
import { TableBodyRowProps } from '../../../../../../../components/Table/TableBody'
import { TableHeaderCellProps } from '../../../../../../../components/Table/TableHeader'
import { toLocaleDateTime } from '../../../../../../../utils/dateTime/dateTimeUtils'
import { useHistory } from 'react-router'
import useProductCategoryView from '../../ProductCategoryView/hooks/useProductCategoryView'

interface UseProductCategoriesTableReturn {
    page: number
    limit: number
    total: number
    headers: TableHeaderCellProps[]
    map: (categories: ProductCategory[]) => TableBodyRowProps[]
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickChangePage: (page: number) => void
}

const useProductCategoriesTable = (): UseProductCategoriesTableReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoriesContext)
    const { onClickEdit, onClickDelete, onClickRestore } = useProductCategoryView()

    const onClickCreate = useCallback(() => history.push('/products/categories/create'), [history])

    const onClickView = useCallback((id: string) => history.push(`/products/categories/view/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(() => global.console.log(), [])

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
        (categories: ProductCategory[]): TableBodyRowProps[] =>
            categories.map(category => ({
                id: category.id,
                cells: [
                    { value: category.name, textAlign: 'left' },
                    { value: toLocaleDateTime(category.createDateTime), textAlign: 'center' }
                ],
                isDeleted: category.isDeleted,
                onClickRow: onClickView,
                onClickEditButton: onClickEdit,
                onClickDeleteButton: onClickDelete,
                onClickRestoreButton: onClickRestore
            })),
        [onClickDelete, onClickEdit, onClickRestore, onClickView]
    )

    const headers: TableHeaderCellProps[] = useMemo(
        () => [
            {
                key: 'Name',
                label: 'Наименование',
                width: 8,
                onClick: () => onClickSort('Name'),
                orderBy: getOrderBy('Name')
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
        onClickCreate,
        onClickDownloadAsCsv,
        onClickChangePage
    }
}

export default useProductCategoriesTable
