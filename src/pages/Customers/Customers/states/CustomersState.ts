import Customer from '../../../../../api/customers/models/Customer'
import CustomerGetPagedListRequest from '../../../../../api/customers/models/CustomerGetPagedListRequest'
import CustomerGetPagedListResponse from '../../../../../api/customers/models/CustomerGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomersState {
    request: CustomerGetPagedListRequest
    setRequest: (request: CustomerGetPagedListRequest) => void
    isLoading: boolean
    customers: Customer[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<CustomerGetPagedListResponse>
}

export const conactsInitialState: CustomersState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerGetPagedListRequest) => void 0,
    isLoading: false,
    customers: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
