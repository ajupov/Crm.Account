import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../../contexts/ProductCategoriesContext/ProductCategoriesContext'
import { calculateOffset } from '../../../../../../../helpers/paginationHelper'
import { useHistory } from 'react-router'

interface UseProductCategoriesTableReturn {
    onClickView: (id: string) => void
    onClickCreate: () => void
    onClickDownloadAsCsv: () => void
    onClickSort: (key: string) => void
    getOrderBy: (key: string) => string | undefined
    onClickChangePage: (page: number) => void
}

const useProductCategoriesTable = (): UseProductCategoriesTableReturn => {
    const history = useHistory()
    const state = useContext(ProductCategoriesContext)

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

    return {
        onClickView,
        onClickCreate,
        onClickDownloadAsCsv,
        onClickSort,
        getOrderBy,
        onClickChangePage
    }
}

export default useProductCategoriesTable
