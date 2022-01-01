export default interface StockConsumptionItem {
    id?: string
    stockConsumptionId?: string
    productId?: string
    orderId?: string
    count: number
    uniqueElementIds?: string[]
}
