import StockRoomChange from '../../../../../api/stock/models/StockRoomChange'
import StockRoomChangeGetPagedListRequest from '../../../../../api/stock/models/StockRoomChangeGetPagedListRequest'
import StockRoomChangeGetPagedListResponse from '../../../../../api/stock/models/StockRoomChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockRoomChangesState {
    request: StockRoomChangeGetPagedListRequest
    setRequest: (request: StockRoomChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: StockRoomChange[]
    total: number
    getAll: () => Promise<StockRoomChangeGetPagedListResponse | undefined>
}

export const stockRoomChangesInitialState: StockRoomChangesState = {
    request: {
        stockRoomId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockRoomChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
