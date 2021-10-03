import LeadSourceChange from '../../../../../../api/customers/models/LeadSourceChange'
import LeadSourceChangeGetPagedListRequest from '../../../../../../api/customers/models/LeadSourceChangeGetPagedListRequest'
import LeadSourceChangeGetPagedListResponse from '../../../../../../api/customers/models/LeadSourceChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface LeadSourceChangesState {
    request: LeadSourceChangeGetPagedListRequest
    setRequest: (request: LeadSourceChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: LeadSourceChange[]
    total: number
    getAll: () => Promise<LeadSourceChangeGetPagedListResponse | undefined>
}

export const leadSourceChangesInitialState: LeadSourceChangesState = {
    request: {
        sourceId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: LeadSourceChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
