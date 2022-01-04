import StockRoom from './StockRoom'

export default interface StockArrivalItem {
    id?: string
    accountId?: string
    stockArrivalId?: string
    roomId?: string
    productId?: string
    count: number
    uniqueElementIds: string[]
    room?: StockRoom
}
