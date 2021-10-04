import CustomerChange from '../../../../../api/customers/models/CustomerChange'
import CustomerChangeGetPagedListRequest from '../../../../../api/customers/models/CustomerChangeGetPagedListRequest'
import CustomerChangeGetPagedListResponse from '../../../../../api/customers/models/CustomerChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomerChangesState {
    request: CustomerChangeGetPagedListRequest
    setRequest: (request: CustomerChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: CustomerChange[]
    total: number
    getAll: () => Promise<CustomerChangeGetPagedListResponse | undefined>
}

export const customerChangesInitialState: CustomerChangesState = {
    request: {
        customerId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
