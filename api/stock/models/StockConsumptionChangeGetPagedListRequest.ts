export default interface StockConsumptionChangeGetPagedListRequest {
    stockConsumptionId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
