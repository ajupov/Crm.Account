import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../contexts/ProductCategoriesContext'

interface UseProductCategoriesSortingReturn {
    sortBy?: string
    orderBy?: string
    onClickSort: (key: string) => void
    getOrderBy: (key: string) => string | undefined
}

const useProductCategoriesSorting = (): UseProductCategoriesSortingReturn => {
    const { request, setRequest } = useContext(ProductCategoriesContext)

    const onClickSort = useCallback(
        (columnName: string): void => {
            if (request.sortBy !== columnName) {
                setRequest({ ...request, sortBy: columnName, orderBy: 'asc' })
            } else {
                setRequest({ ...request, orderBy: request.orderBy === 'asc' ? 'desc' : 'asc' })
            }
        },
        [request, setRequest]
    )

    const getOrderBy = useCallback(
        (columnName: string): string | undefined => {
            if (request.sortBy === columnName) {
                return request.orderBy
            }

            return void 0
        },
        [request.orderBy, request.sortBy]
    )

    return {
        sortBy: request.sortBy,
        orderBy: request.orderBy,
        onClickSort,
        getOrderBy
    }
}

export default useProductCategoriesSorting
