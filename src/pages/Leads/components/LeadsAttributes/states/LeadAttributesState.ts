import LeadAttribute from '../../../../../../api/customers/models/LeadAttribute'
import LeadAttributeGetPagedListRequest from '../../../../../../api/customers/models/LeadAttributeGetPagedListRequest'
import LeadAttributeGetPagedListResponse from '../../../../../../api/customers/models/LeadAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface LeadAttributesState {
    request: LeadAttributeGetPagedListRequest
    setRequest: (request: LeadAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: LeadAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<LeadAttributeGetPagedListResponse>
}

export const leadAttributesInitialState: LeadAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: LeadAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
