import CustomerSourceChange from '../../../../../api/customers/models/CustomerSourceChange'
import CustomerSourceChangeGetPagedListRequest from '../../../../../api/customers/models/CustomerSourceChangeGetPagedListRequest'
import CustomerSourceChangeGetPagedListResponse from '../../../../../api/customers/models/CustomerSourceChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomerSourceChangesState {
    request: CustomerSourceChangeGetPagedListRequest
    setRequest: (request: CustomerSourceChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: CustomerSourceChange[]
    total: number
    getAll: () => Promise<CustomerSourceChangeGetPagedListResponse | undefined>
}

export const customerSourceChangesInitialState: CustomerSourceChangesState = {
    request: {
        sourceId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerSourceChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
