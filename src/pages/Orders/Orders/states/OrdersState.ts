import Customer from '../../../../../api/customers/models/Customer'
import Order from '../../../../../api/orders/models/Order'
import OrderGetPagedListRequest from '../../../../../api/orders/models/OrderGetPagedListRequest'
import OrderGetPagedListResponse from '../../../../../api/orders/models/OrderGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrdersState {
    request: OrderGetPagedListRequest
    setRequest: (request: OrderGetPagedListRequest) => void
    isLoading: boolean
    orders: Order[]
    customers: Customer[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<OrderGetPagedListResponse>
}

export const ordersInitialState: OrdersState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderGetPagedListRequest) => void 0,
    isLoading: false,
    orders: [],
    customers: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
