import Lead from '../../../../../../api/customers/models/Lead'
import LeadGetPagedListRequest from '../../../../../../api/customers/models/LeadGetPagedListRequest'
import LeadGetPagedListResponse from '../../../../../../api/customers/models/LeadGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface LeadsState {
    request: LeadGetPagedListRequest
    setRequest: (request: LeadGetPagedListRequest) => void
    isLoading: boolean
    leads: Lead[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<LeadGetPagedListResponse>
}

export const conactsInitialState: LeadsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: LeadGetPagedListRequest) => void 0,
    isLoading: false,
    leads: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
