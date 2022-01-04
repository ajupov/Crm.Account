import StockRoom from './StockRoom'

export default interface StockConsumptionItem {
    id?: string
    stockConsumptionId?: string
    roomId?: string
    productId?: string
    orderId?: string
    count: number
    uniqueElementIds?: string[]
    room?: StockRoom
}
