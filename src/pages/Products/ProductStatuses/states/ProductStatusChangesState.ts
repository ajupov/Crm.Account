import ProductStatusChange from '../../../../../api/products/models/ProductStatusChange'
import ProductStatusChangeGetPagedListRequest from '../../../../../api/products/models/ProductStatusChangeGetPagedListRequest'
import ProductStatusChangeGetPagedListResponse from '../../../../../api/products/models/ProductStatusChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductStatusChangesState {
    request: ProductStatusChangeGetPagedListRequest
    setRequest: (request: ProductStatusChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: ProductStatusChange[]
    total: number
    getAll: () => Promise<ProductStatusChangeGetPagedListResponse | undefined>
}

export const productStatusChangesInitialState: ProductStatusChangesState = {
    request: {
        statusId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductStatusChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
