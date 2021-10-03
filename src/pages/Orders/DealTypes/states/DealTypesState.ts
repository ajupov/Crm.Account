import OrderType from '../../../../../api/orders/models/OrderType'
import OrderTypeGetPagedListRequest from '../../../../../api/orders/models/OrderTypeGetPagedListRequest'
import OrderTypeGetPagedListResponse from '../../../../../api/orders/models/OrderTypeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderTypesState {
    request: OrderTypeGetPagedListRequest
    setRequest: (request: OrderTypeGetPagedListRequest) => void
    isLoading: boolean
    types: OrderType[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<OrderTypeGetPagedListResponse>
}

export const orderTypesInitialState: OrderTypesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderTypeGetPagedListRequest) => void 0,
    isLoading: false,
    types: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
