import ProductCategoriesContext from '../contexts/ProductCategoriesContext'
import { useContext } from 'react'

interface UseProductCategoriesSortingReturn {
    sortBy?: string
    orderBy?: string
    onClickSort: (key: string) => void
    getOrderBy: (key: string) => string | undefined
}

const useProductCategoriesSorting = (): UseProductCategoriesSortingReturn => {
    const { request, setRequest } = useContext(ProductCategoriesContext)

    const onClickSort = (columnName: string): void => {
        if (request.sortBy !== columnName) {
            setRequest({ ...request, sortBy: columnName, orderBy: 'asc' })
        } else {
            setRequest({ ...request, orderBy: request.orderBy === 'asc' ? 'desc' : 'asc' })
        }
    }

    const getOrderBy = (columnName: string): string | undefined => {
        if (request.sortBy === columnName) {
            return request.orderBy
        }

        return void 0
    }

    return {
        sortBy: request.sortBy,
        orderBy: request.orderBy,
        onClickSort,
        getOrderBy
    }
}

export default useProductCategoriesSorting
