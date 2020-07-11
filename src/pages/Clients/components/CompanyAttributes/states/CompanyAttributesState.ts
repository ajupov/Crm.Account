import CompanyAttribute from '../../../../../../api/companies/models/CompanyAttribute'
import CompanyAttributeGetPagedListRequest from '../../../../../../api/companies/models/CompanyAttributeGetPagedListRequest'
import CompanyAttributeGetPagedListResponse from '../../../../../../api/companies/models/CompanyAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CompanyAttributesState {
    request: CompanyAttributeGetPagedListRequest
    setRequest: (request: CompanyAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: CompanyAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<CompanyAttributeGetPagedListResponse>
}

export const companyAttributesInitialState: CompanyAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CompanyAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
