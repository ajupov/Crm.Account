export default interface OrderGetPagedListRequest {
    name?: string
    minStartDateTime?: string
    maxStartDateTime?: string
    minEndDateTime?: string
    maxEndDateTime?: string
    minSum?: number
    maxSum?: number
    minSumWithoutDiscount?: number
    maxSumWithoutDiscount?: number
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    typeIds?: string[]
    statusIds?: string[]
    customerIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    allAttributes?: boolean
    attributes?: { [key: string]: string }
    itemsProductIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
