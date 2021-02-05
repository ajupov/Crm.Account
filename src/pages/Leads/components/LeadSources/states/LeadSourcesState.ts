import LeadSource from '../../../../../../api/leads/models/LeadSource'
import LeadSourceGetPagedListRequest from '../../../../../../api/leads/models/LeadSourceGetPagedListRequest'
import LeadSourceGetPagedListResponse from '../../../../../../api/leads/models/LeadSourceGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface LeadSourcesState {
    request: LeadSourceGetPagedListRequest
    setRequest: (request: LeadSourceGetPagedListRequest) => void
    isLoading: boolean
    sources: LeadSource[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<LeadSourceGetPagedListResponse>
}

export const leadSourcesInitialState: LeadSourcesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: LeadSourceGetPagedListRequest) => void 0,
    isLoading: false,
    sources: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
