import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../../contexts/ProductCategoriesContext'
import { calculateOffset } from '../../../../../helpers/paginationHelper'
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
    const { request, setRequest } = useContext(ProductCategoriesContext)

    const onClickCreate = useCallback(() => history.push('/products/categories/create'), [history])

    const onClickView = useCallback((id: string) => history.push(`/products/categories/view/${id}`), [history])

    const onClickDownloadAsCsv = useCallback(() => global.console.log(), [])

    const onClickSort = useCallback(
        (columnName: string) => {
            if (request.sortBy !== columnName) {
                setRequest({ ...request, sortBy: columnName, orderBy: 'asc' })
            } else {
                setRequest({ ...request, orderBy: request.orderBy === 'asc' ? 'desc' : 'asc' })
            }
        },
        [request, setRequest]
    )

    const getOrderBy = useCallback(
        (columnName: string) => {
            if (request.sortBy === columnName) {
                return request.orderBy
            }

            return void 0
        },
        [request.orderBy, request.sortBy]
    )

    const onClickChangePage = useCallback(
        (page: number): void => setRequest({ ...request, offset: calculateOffset(page, request.limit) }),
        [request, setRequest]
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
