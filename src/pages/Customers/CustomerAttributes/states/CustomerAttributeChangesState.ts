import CustomerAttributeChange from '../../../../../api/customers/models/CustomerAttributeChange'
import CustomerAttributeChangeGetPagedListRequest from '../../../../../api/customers/models/CustomerAttributeChangeGetPagedListRequest'
import CustomerAttributeChangeGetPagedListResponse from '../../../../../api/customers/models/CustomerAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomerAttributeChangesState {
    request: CustomerAttributeChangeGetPagedListRequest
    setRequest: (request: CustomerAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: CustomerAttributeChange[]
    total: number
    getAll: () => Promise<CustomerAttributeChangeGetPagedListResponse | undefined>
}

export const customerAttributeChangesInitialState: CustomerAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
