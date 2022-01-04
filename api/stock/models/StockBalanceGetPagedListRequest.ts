export default interface StockBalanceGetPagedListRequest {
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    createUserIds?: string[]
    roomIds?: string[]
    productIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
