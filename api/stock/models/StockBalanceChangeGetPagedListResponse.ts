import StockBalanceChange from './StockBalanceChange'

export default interface StockBalanceChangeGetPagedListResponse {
    totalCount: number
    changes?: StockBalanceChange[]
}
