import ProductCategories from './ProductCategories'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'
import { createContext } from 'react'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

const ProductCategoriesContext = createContext<ProductCategories>({
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductCategoryGetPagedListRequest) => void 0,
    isLoading: false,
    categories: [],
    total: 0
})

export default ProductCategoriesContext
