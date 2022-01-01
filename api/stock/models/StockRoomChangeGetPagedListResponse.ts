import StockRoomChange from './StockRoomChange'

export default interface StockRoomChangeGetPagedListResponse {
    totalCount: number
    changes?: StockRoomChange[]
}
