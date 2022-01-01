import StockArrivalType from './StockArrivalType'

export default interface StockArrivalGetPagedListRequest {
    isDeleted: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    types?: StockArrivalType[]
    createUserIds?: string[]
    orderIds?: string[]
    itemsProductIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
