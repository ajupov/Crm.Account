import StockBalanceChange from '../../../../../api/stock/models/StockBalanceChange'
import StockBalanceChangeGetPagedListRequest from '../../../../../api/stock/models/StockBalanceChangeGetPagedListRequest'
import StockBalanceChangeGetPagedListResponse from '../../../../../api/stock/models/StockBalanceChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockBalanceChangesState {
    request: StockBalanceChangeGetPagedListRequest
    setRequest: (request: StockBalanceChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: StockBalanceChange[]
    total: number
    getAll: () => Promise<StockBalanceChangeGetPagedListResponse | undefined>
}

export const stockBalanceChangesInitialState: StockBalanceChangesState = {
    request: {
        stockBalanceId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockBalanceChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
