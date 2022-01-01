import StockConsumptionChange from './StockConsumptionChange'

export default interface StockConsumptionChangeGetPagedListResponse {
    totalCount: number
    changes?: StockConsumptionChange[]
}
