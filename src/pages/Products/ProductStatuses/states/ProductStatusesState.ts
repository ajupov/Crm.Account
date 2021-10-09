import ProductStatus from '../../../../../api/products/models/ProductStatus'
import ProductStatusGetPagedListRequest from '../../../../../api/products/models/ProductStatusGetPagedListRequest'
import ProductStatusGetPagedListResponse from '../../../../../api/products/models/ProductStatusGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductStatusesState {
    request: ProductStatusGetPagedListRequest
    setRequest: (request: ProductStatusGetPagedListRequest) => void
    isLoading: boolean
    statuses: ProductStatus[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<ProductStatusGetPagedListResponse>
}

export const productStatusesInitialState: ProductStatusesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductStatusGetPagedListRequest) => void 0,
    isLoading: false,
    statuses: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
