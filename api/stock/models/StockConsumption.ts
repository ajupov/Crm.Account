import StockConsumptionItem from './StockConsumptionItem'
import StockConsumptionType from './StockConsumptionType'

export default interface StockConsumption {
    id?: string
    accountId?: string
    createUserId?: string
    type?: StockConsumptionType
    supplierId?: string
    orderId?: string
    inventoryId?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    items?: StockConsumptionItem[]
}
