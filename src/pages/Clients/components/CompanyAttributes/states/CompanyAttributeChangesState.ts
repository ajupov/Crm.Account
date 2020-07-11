import CompanyAttributeChange from '../../../../../../api/companies/models/CompanyAttributeChange'
import CompanyAttributeChangeGetPagedListRequest from '../../../../../../api/companies/models/CompanyAttributeChangeGetPagedListRequest'
import CompanyAttributeChangeGetPagedListResponse from '../../../../../../api/companies/models/CompanyAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CompanyAttributeChangesState {
    request: CompanyAttributeChangeGetPagedListRequest
    setRequest: (request: CompanyAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: CompanyAttributeChange[]
    total: number
    getAll: () => Promise<CompanyAttributeChangeGetPagedListResponse | undefined>
}

export const companyAttributeChangesInitialState: CompanyAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CompanyAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
