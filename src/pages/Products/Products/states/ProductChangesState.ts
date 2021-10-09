import ProductChange from '../../../../../api/products/models/ProductChange'
import ProductChangeGetPagedListRequest from '../../../../../api/products/models/ProductChangeGetPagedListRequest'
import ProductChangeGetPagedListResponse from '../../../../../api/products/models/ProductChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductChangesState {
    request: ProductChangeGetPagedListRequest
    setRequest: (request: ProductChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: ProductChange[]
    total: number
    getAll: () => Promise<ProductChangeGetPagedListResponse | undefined>
}

export const productChangesInitialState: ProductChangesState = {
    request: {
        productId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
