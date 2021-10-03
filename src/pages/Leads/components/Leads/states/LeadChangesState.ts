import LeadChange from '../../../../../../api/customers/models/LeadChange'
import LeadChangeGetPagedListRequest from '../../../../../../api/customers/models/LeadChangeGetPagedListRequest'
import LeadChangeGetPagedListResponse from '../../../../../../api/customers/models/LeadChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface LeadChangesState {
    request: LeadChangeGetPagedListRequest
    setRequest: (request: LeadChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: LeadChange[]
    total: number
    getAll: () => Promise<LeadChangeGetPagedListResponse | undefined>
}

export const leadChangesInitialState: LeadChangesState = {
    request: {
        leadId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: LeadChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
