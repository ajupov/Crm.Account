import DealType from '../../../../../api/deals/models/DealType'
import DealTypeGetPagedListRequest from '../../../../../api/deals/models/DealTypeGetPagedListRequest'
import DealTypeGetPagedListResponse from '../../../../../api/deals/models/DealTypeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealTypesState {
    request: DealTypeGetPagedListRequest
    setRequest: (request: DealTypeGetPagedListRequest) => void
    isLoading: boolean
    types: DealType[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<DealTypeGetPagedListResponse>
}

export const dealTypesInitialState: DealTypesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealTypeGetPagedListRequest) => void 0,
    isLoading: false,
    types: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
