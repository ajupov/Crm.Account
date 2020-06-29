import ProductCategoryChange from '../../../../../../api/products/models/ProductCategoryChange'
import ProductCategoryChangeGetPagedListRequest from '../../../../../../api/products/models/ProductCategoryChangeGetPagedListRequest'
import ProductCategoryChangeGetPagedListResponse from '../../../../../../api/products/models/ProductCategoryChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductCategoryChangesState {
    request: ProductCategoryChangeGetPagedListRequest
    setRequest: (request: ProductCategoryChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: ProductCategoryChange[]
    total: number
    getAll: () => Promise<ProductCategoryChangeGetPagedListResponse | undefined>
}

export const productCategoryChangesInitialState: ProductCategoryChangesState = {
    request: {
        categoryId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductCategoryChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
