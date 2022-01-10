import StockRoom from './StockRoom'

export default interface StockArrivalItem {
    id?: string
    stockArrivalId?: string
    roomId?: string
    productId?: string
    count: number
    room?: StockRoom
    uniqueElementIds?: string[]
}
