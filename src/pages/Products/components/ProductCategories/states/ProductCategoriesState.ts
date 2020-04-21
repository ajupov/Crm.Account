import ProductCategory from '../../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../../api/products/models/ProductCategoryGetPagedListRequest'
import ProductCategoryGetPagedListResponse from '../../../../../../api/products/models/ProductCategoryGetPagedListResponse'

export default interface ProductCategoriesState {
    request: ProductCategoryGetPagedListRequest
    setRequest: (request: ProductCategoryGetPagedListRequest) => void
    isLoading: boolean
    categories: ProductCategory[]
    total: number
    lastModifyDateTime: string
    getAll: () => Promise<ProductCategoryGetPagedListResponse>
}

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export const productCategoriesInitialState: ProductCategoriesState = {
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
    total: 0,
    lastModifyDateTime: '',
    getAll: () => Promise.resolve({ totalCount: 0 })
}
