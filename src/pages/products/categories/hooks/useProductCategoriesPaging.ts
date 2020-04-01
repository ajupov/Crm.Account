import { calculateOffset } from '../../../../helpers/paginationHelper'
import { useCallback } from 'react'
import useProductCategories from './useProductCategories'

interface UseProductCategoriesPagingReturn {
    offset: number
    limit: number
    onClickChangePage: (page: number) => void
}

const useProductCategoriesPaging = (): UseProductCategoriesPagingReturn => {
    const { request, setRequest } = useProductCategories()

    const onClickChangePage = useCallback(
        (page: number): void => setRequest({ ...request, offset: calculateOffset(page, request.limit) }),
        [request, setRequest]
    )

    return { offset: request.offset, limit: request.limit, onClickChangePage }
}

export default useProductCategoriesPaging
