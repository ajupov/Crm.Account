import StockRoom from './StockRoom'

export default interface StockRoomGetPagedListResponse {
    totalCount: number
    lastModifyDateTime: string
    rooms?: StockRoom[]
}
