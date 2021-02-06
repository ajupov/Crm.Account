import DealTypeChange from '../../../../../api/deals/models/DealTypeChange'
import DealTypeChangeGetPagedListRequest from '../../../../../api/deals/models/DealTypeChangeGetPagedListRequest'
import DealTypeChangeGetPagedListResponse from '../../../../../api/deals/models/DealTypeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealTypeChangesState {
    request: DealTypeChangeGetPagedListRequest
    setRequest: (request: DealTypeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: DealTypeChange[]
    total: number
    getAll: () => Promise<DealTypeChangeGetPagedListResponse | undefined>
}

export const dealTypeChangesInitialState: DealTypeChangesState = {
    request: {
        typeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealTypeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
