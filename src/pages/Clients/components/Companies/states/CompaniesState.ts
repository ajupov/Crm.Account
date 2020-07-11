import Company from '../../../../../../api/companies/models/Company'
import CompanyGetPagedListRequest from '../../../../../../api/companies/models/CompanyGetPagedListRequest'
import CompanyGetPagedListResponse from '../../../../../../api/companies/models/CompanyGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CompaniesState {
    request: CompanyGetPagedListRequest
    setRequest: (request: CompanyGetPagedListRequest) => void
    isLoading: boolean
    companies: Company[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<CompanyGetPagedListResponse>
}

export const conactsInitialState: CompaniesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CompanyGetPagedListRequest) => void 0,
    isLoading: false,
    companies: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
