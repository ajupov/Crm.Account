import Product from '../../../../../api/products/models/Product'
import StockBalance from '../../../../../api/stock/models/StockBalance'
import StockBalanceGetPagedListRequest from '../../../../../api/stock/models/StockBalanceGetPagedListRequest'
import StockBalanceGetPagedListResponse from '../../../../../api/stock/models/StockBalanceGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockBalancesState {
    request: StockBalanceGetPagedListRequest
    setRequest: (request: StockBalanceGetPagedListRequest) => void
    isLoading: boolean
    stockBalances: StockBalance[]
    products: Product[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<StockBalanceGetPagedListResponse>
}

export const stockBalancesInitialState: StockBalancesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockBalanceGetPagedListRequest) => void 0,
    isLoading: false,
    stockBalances: [],
    products: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
