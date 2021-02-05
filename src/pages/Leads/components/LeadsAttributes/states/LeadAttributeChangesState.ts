import LeadAttributeChange from '../../../../../../api/leads/models/LeadAttributeChange'
import LeadAttributeChangeGetPagedListRequest from '../../../../../../api/leads/models/LeadAttributeChangeGetPagedListRequest'
import LeadAttributeChangeGetPagedListResponse from '../../../../../../api/leads/models/LeadAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface LeadAttributeChangesState {
    request: LeadAttributeChangeGetPagedListRequest
    setRequest: (request: LeadAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: LeadAttributeChange[]
    total: number
    getAll: () => Promise<LeadAttributeChangeGetPagedListResponse | undefined>
}

export const leadAttributeChangesInitialState: LeadAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: LeadAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
