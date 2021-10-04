import OrderAttribute from '../../../../../api/orders/models/OrderAttribute'
import OrderAttributeGetPagedListRequest from '../../../../../api/orders/models/OrderAttributeGetPagedListRequest'
import OrderAttributeGetPagedListResponse from '../../../../../api/orders/models/OrderAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderAttributesState {
    request: OrderAttributeGetPagedListRequest
    setRequest: (request: OrderAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: OrderAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<OrderAttributeGetPagedListResponse>
}

export const orderAttributesInitialState: OrderAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
