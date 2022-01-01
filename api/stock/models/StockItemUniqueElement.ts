import StockItemUniqueElementStatus from './StockItemUniqueElementStatus'

export default interface StockItemUniqueElement {
    id?: string
    accountId?: string
    createUserId?: string
    productId?: string
    status?: StockItemUniqueElementStatus
    value: string
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
}
