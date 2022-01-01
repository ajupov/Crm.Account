export default interface StockArrivalChangeGetPagedListRequest {
    stockArrivalId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
