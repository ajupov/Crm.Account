import CustomerSource from '../../../../../../api/customers/models/CustomerSource'
import CustomerSourceGetPagedListRequest from '../../../../../../api/customers/models/CustomerSourceGetPagedListRequest'
import CustomerSourceGetPagedListResponse from '../../../../../../api/customers/models/CustomerSourceGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomerSourcesState {
    request: CustomerSourceGetPagedListRequest
    setRequest: (request: CustomerSourceGetPagedListRequest) => void
    isLoading: boolean
    sources: CustomerSource[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<CustomerSourceGetPagedListResponse>
}

export const customerSourcesInitialState: CustomerSourcesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerSourceGetPagedListRequest) => void 0,
    isLoading: false,
    sources: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
