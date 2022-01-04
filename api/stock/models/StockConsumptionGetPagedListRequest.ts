import StockConsumptionType from './StockConsumptionType'

export default interface StockConsumptionGetPagedListRequest {
    isDeleted: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    types?: StockConsumptionType[]
    createUserIds?: string[]
    orderIds?: string[]
    itemsRoomIds?: string[]
    itemsProductIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
