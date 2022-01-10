import StockArrivalChange from '../../../../../api/stock/models/StockArrivalChange'
import StockArrivalChangeGetPagedListRequest from '../../../../../api/stock/models/StockArrivalChangeGetPagedListRequest'
import StockArrivalChangeGetPagedListResponse from '../../../../../api/stock/models/StockArrivalChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockArrivalChangesState {
    request: StockArrivalChangeGetPagedListRequest
    setRequest: (request: StockArrivalChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: StockArrivalChange[]
    total: number
    getAll: () => Promise<StockArrivalChangeGetPagedListResponse | undefined>
}

export const stockArrivalChangesInitialState: StockArrivalChangesState = {
    request: {
        stockArrivalId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockArrivalChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
