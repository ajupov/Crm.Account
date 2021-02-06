import DealStatusChange from '../../../../../api/deals/models/DealStatusChange'
import DealStatusChangeGetPagedListRequest from '../../../../../api/deals/models/DealStatusChangeGetPagedListRequest'
import DealStatusChangeGetPagedListResponse from '../../../../../api/deals/models/DealStatusChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealStatusChangesState {
    request: DealStatusChangeGetPagedListRequest
    setRequest: (request: DealStatusChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: DealStatusChange[]
    total: number
    getAll: () => Promise<DealStatusChangeGetPagedListResponse | undefined>
}

export const dealStatusChangesInitialState: DealStatusChangesState = {
    request: {
        statusId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealStatusChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
