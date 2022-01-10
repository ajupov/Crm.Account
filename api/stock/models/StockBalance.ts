import StockRoom from './StockRoom'

export default interface StockArrival {
    id?: string
    accountId?: string
    createUserId?: string
    roomId?: string
    productId?: string
    count: number
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    // uniqueElementIds?: string[]
    room?: StockRoom
}
