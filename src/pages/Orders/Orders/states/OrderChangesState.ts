import OrderChange from '../../../../../api/orders/models/OrderChange'
import OrderChangeGetPagedListRequest from '../../../../../api/orders/models/OrderChangeGetPagedListRequest'
import OrderChangeGetPagedListResponse from '../../../../../api/orders/models/OrderChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderChangesState {
    request: OrderChangeGetPagedListRequest
    setRequest: (request: OrderChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: OrderChange[]
    total: number
    getAll: () => Promise<OrderChangeGetPagedListResponse | undefined>
}

export const orderChangesInitialState: OrderChangesState = {
    request: {
        orderId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
