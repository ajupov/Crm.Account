import { useCallback, useContext } from 'react'

import ProductCategoriesContext from '../contexts/ProductCategoriesContext'
import { calculateOffset } from '../../../../helpers/paginationHelper'

interface UseProductCategoriesPagingReturn {
    offset: number
    limit: number
    onClickChangePage: (page: number) => void
}

const useProductCategoriesPaging = (): UseProductCategoriesPagingReturn => {
    const { request, setRequest } = useContext(ProductCategoriesContext)

    const onClickChangePage = useCallback(
        (page: number): void => setRequest({ ...request, offset: calculateOffset(page, request.limit) }),
        [request, setRequest]
    )

    return { offset: request.offset, limit: request.limit, onClickChangePage }
}

export default useProductCategoriesPaging
