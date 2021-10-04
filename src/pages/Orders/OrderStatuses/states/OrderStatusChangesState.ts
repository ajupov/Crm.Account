import OrderStatusChange from '../../../../../api/orders/models/OrderStatusChange'
import OrderStatusChangeGetPagedListRequest from '../../../../../api/orders/models/OrderStatusChangeGetPagedListRequest'
import OrderStatusChangeGetPagedListResponse from '../../../../../api/orders/models/OrderStatusChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderStatusChangesState {
    request: OrderStatusChangeGetPagedListRequest
    setRequest: (request: OrderStatusChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: OrderStatusChange[]
    total: number
    getAll: () => Promise<OrderStatusChangeGetPagedListResponse | undefined>
}

export const orderStatusChangesInitialState: OrderStatusChangesState = {
    request: {
        statusId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderStatusChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
