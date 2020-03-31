import { useState } from 'react'

export const DefaultSortBy = 'CreateDateTime'
export const DefaultOrderBy = 'desc'
export type OrderBy = 'asc' | 'desc' | undefined

export interface SortingParams {
    sortBy?: string
    orderBy?: string
}

interface UseProductCategoriesSortingReturn {
    sortBy?: string
    orderBy?: OrderBy
    setSortBy: (value?: string) => void
    setOrderBy: (value?: OrderBy) => void
    onClickSort: (columnName: string) => void
    getOrderBy: (columnName: string) => OrderBy
}

const useProductCategoriesSorting = (): UseProductCategoriesSortingReturn => {
    const [sortBy, setSortBy] = useState<string | undefined>(DefaultSortBy)
    const [orderBy, setOrderBy] = useState<OrderBy>(DefaultOrderBy)

    const onClickSort = (columnName: string): void => {
        if (sortBy !== columnName) {
            setSortBy(columnName)
            setOrderBy('asc')
        } else {
            setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
        }
    }

    const getOrderBy = (columnName: string): OrderBy => (sortBy === columnName ? orderBy : void 0)

    return { sortBy, orderBy, setSortBy, setOrderBy, onClickSort, getOrderBy }
}

export default useProductCategoriesSorting
