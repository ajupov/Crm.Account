import DealStatus from '../../../../../api/orders/models/DealStatus'
import DealStatusGetPagedListRequest from '../../../../../api/orders/models/DealStatusGetPagedListRequest'
import DealStatusGetPagedListResponse from '../../../../../api/orders/models/DealStatusGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealStatusesState {
    request: DealStatusGetPagedListRequest
    setRequest: (request: DealStatusGetPagedListRequest) => void
    isLoading: boolean
    statuses: DealStatus[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<DealStatusGetPagedListResponse>
}

export const dealStatusesInitialState: DealStatusesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealStatusGetPagedListRequest) => void 0,
    isLoading: false,
    statuses: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
