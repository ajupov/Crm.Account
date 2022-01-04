import StockBalance from './StockBalance'

export default interface StockBalanceGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    balances?: StockBalance[]
}
