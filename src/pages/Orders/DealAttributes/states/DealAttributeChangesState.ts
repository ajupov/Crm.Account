import OrderAttributeChange from '../../../../../api/orders/models/OrderAttributeChange'
import OrderAttributeChangeGetPagedListRequest from '../../../../../api/orders/models/OrderAttributeChangeGetPagedListRequest'
import OrderAttributeChangeGetPagedListResponse from '../../../../../api/orders/models/OrderAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderAttributeChangesState {
    request: OrderAttributeChangeGetPagedListRequest
    setRequest: (request: OrderAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: OrderAttributeChange[]
    total: number
    getAll: () => Promise<OrderAttributeChangeGetPagedListResponse | undefined>
}

export const orderAttributeChangesInitialState: OrderAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
