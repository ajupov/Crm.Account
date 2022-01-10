import StockArrival from '../../../../../api/stock/models/StockArrival'
import StockArrivalGetPagedListRequest from '../../../../../api/stock/models/StockArrivalGetPagedListRequest'
import StockArrivalGetPagedListResponse from '../../../../../api/stock/models/StockArrivalGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockArrivalsState {
    request: StockArrivalGetPagedListRequest
    setRequest: (request: StockArrivalGetPagedListRequest) => void
    isLoading: boolean
    stockArrivals: StockArrival[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<StockArrivalGetPagedListResponse>
}

export const stockArrivalsInitialState: StockArrivalsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockArrivalGetPagedListRequest) => void 0,
    isLoading: false,
    stockArrivals: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
