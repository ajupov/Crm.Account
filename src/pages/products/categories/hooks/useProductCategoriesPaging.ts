import { useCallback, useState } from 'react'

import { calculateOffset } from '../../../../helpers/paginationHelper'

export const DefaultLimit = 10

export interface PagingParams {
    offset: number
    limit: number
}

interface UseProductCategoriesPagingReturn {
    offset: number
    limit: number
    total: number
    setOffset: (value: number) => void
    setTotal: (value: number) => void
    onClickChangePage: (page: number) => void
}

const useProductCategoriesPaging = (): UseProductCategoriesPagingReturn => {
    const [limit] = useState<number>(DefaultLimit)
    const [offset, setOffset] = useState<number>(0)
    const [total, setTotal] = useState<number>(0)

    const onClickChangePage = useCallback((page: number): void => setOffset(calculateOffset(page, limit)), [limit])

    return { offset, limit, total, setOffset, setTotal, onClickChangePage }
}

export default useProductCategoriesPaging
