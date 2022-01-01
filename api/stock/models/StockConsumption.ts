import StockConsumptionType from './StockConsumptionType'

export default interface StockConsumption {
    id?: string
    accountId?: string
    createUserId?: string
    type?: StockConsumptionType
    orderId?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    uniqueElementIds?: string[]
}
