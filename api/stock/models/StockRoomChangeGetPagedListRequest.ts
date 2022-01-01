export default interface StockRoomChangeGetPagedListRequest {
    stockRoomId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
