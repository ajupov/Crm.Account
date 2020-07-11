import CompanyChange from '../../../../../../api/companies/models/CompanyChange'
import CompanyChangeGetPagedListRequest from '../../../../../../api/companies/models/CompanyChangeGetPagedListRequest'
import CompanyChangeGetPagedListResponse from '../../../../../../api/companies/models/CompanyChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CompanyChangesState {
    request: CompanyChangeGetPagedListRequest
    setRequest: (request: CompanyChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: CompanyChange[]
    total: number
    getAll: () => Promise<CompanyChangeGetPagedListResponse | undefined>
}

export const companyChangesInitialState: CompanyChangesState = {
    request: {
        companyId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CompanyChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
