import StockConsumption from './StockConsumption'

export default interface StockConsumptionGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    consumptions?: StockConsumption[]
}
