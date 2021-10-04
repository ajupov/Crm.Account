import OrderTypeChange from '../../../../../api/orders/models/OrderTypeChange'
import OrderTypeChangeGetPagedListRequest from '../../../../../api/orders/models/OrderTypeChangeGetPagedListRequest'
import OrderTypeChangeGetPagedListResponse from '../../../../../api/orders/models/OrderTypeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderTypeChangesState {
    request: OrderTypeChangeGetPagedListRequest
    setRequest: (request: OrderTypeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: OrderTypeChange[]
    total: number
    getAll: () => Promise<OrderTypeChangeGetPagedListResponse | undefined>
}

export const orderTypeChangesInitialState: OrderTypeChangesState = {
    request: {
        typeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderTypeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
