export default interface StockBalanceChangeGetPagedListRequest {
    stockBalanceId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
