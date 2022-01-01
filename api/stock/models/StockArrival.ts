import StockArrivalItem from './StockArrivalItem'
import StockArrivalType from './StockArrivalType'

export default interface StockArrival {
    id?: string
    accountId?: string
    createUserId?: string
    type: StockArrivalType
    orderId?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    items?: StockArrivalItem[]
}
