import CustomerAttribute from '../../../../../api/customers/models/CustomerAttribute'
import CustomerAttributeGetPagedListRequest from '../../../../../api/customers/models/CustomerAttributeGetPagedListRequest'
import CustomerAttributeGetPagedListResponse from '../../../../../api/customers/models/CustomerAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomerAttributesState {
    request: CustomerAttributeGetPagedListRequest
    setRequest: (request: CustomerAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: CustomerAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<CustomerAttributeGetPagedListResponse>
}

export const customerAttributesInitialState: CustomerAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
