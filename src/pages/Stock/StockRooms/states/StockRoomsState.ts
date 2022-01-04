import StockRoom from '../../../../../api/stock/models/StockRoom'
import StockRoomGetPagedListRequest from '../../../../../api/stock/models/StockRoomGetPagedListRequest'
import StockRoomGetPagedListResponse from '../../../../../api/stock/models/StockRoomGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockRoomsState {
    request: StockRoomGetPagedListRequest
    setRequest: (request: StockRoomGetPagedListRequest) => void
    isLoading: boolean
    rooms: StockRoom[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<StockRoomGetPagedListResponse>
}

export const stockRoomsInitialState: StockRoomsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockRoomGetPagedListRequest) => void 0,
    isLoading: false,
    rooms: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
