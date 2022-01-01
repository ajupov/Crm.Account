import StockArrivalChange from './StockArrivalChange'

export default interface StockArrivalChangeGetPagedListResponse {
    totalCount: number
    changes?: StockArrivalChange[]
}
