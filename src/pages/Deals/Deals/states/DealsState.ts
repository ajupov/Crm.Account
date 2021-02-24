import Deal from '../../../../../api/deals/models/Deal'
import DealGetPagedListRequest from '../../../../../api/deals/models/DealGetPagedListRequest'
import DealGetPagedListResponse from '../../../../../api/deals/models/DealGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealsState {
    request: DealGetPagedListRequest
    setRequest: (request: DealGetPagedListRequest) => void
    isLoading: boolean
    deals: Deal[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<DealGetPagedListResponse>
}

export const conactsInitialState: DealsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealGetPagedListRequest) => void 0,
    isLoading: false,
    deals: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
