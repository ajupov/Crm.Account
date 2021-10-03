import OrderStatus from '../../../../../api/orders/models/OrderStatus'
import OrderStatusGetPagedListRequest from '../../../../../api/orders/models/OrderStatusGetPagedListRequest'
import OrderStatusGetPagedListResponse from '../../../../../api/orders/models/OrderStatusGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderStatusesState {
    request: OrderStatusGetPagedListRequest
    setRequest: (request: OrderStatusGetPagedListRequest) => void
    isLoading: boolean
    statuses: OrderStatus[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<OrderStatusGetPagedListResponse>
}

export const orderStatusesInitialState: OrderStatusesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderStatusGetPagedListRequest) => void 0,
    isLoading: false,
    statuses: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
