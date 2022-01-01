import StockArrival from './StockArrival'

export default interface StockArrivalGetPagedListResponse {
    totalCount: number
    lastModifyDateTime: string
    arrivals?: StockArrival[]
}
