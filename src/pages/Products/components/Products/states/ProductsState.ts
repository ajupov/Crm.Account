import Product from '../../../../../../api/products/models/Product'
import ProductGetPagedListRequest from '../../../../../../api/products/models/ProductGetPagedListRequest'
import ProductGetPagedListResponse from '../../../../../../api/products/models/ProductGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductsState {
    request: ProductGetPagedListRequest
    setRequest: (request: ProductGetPagedListRequest) => void
    isLoading: boolean
    products: Product[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<ProductGetPagedListResponse>
}

export const productsInitialState: ProductsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductGetPagedListRequest) => void 0,
    isLoading: false,
    products: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
