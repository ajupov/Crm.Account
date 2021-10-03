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
    minFinishProbability?: number
    maxFinishProbability?: number
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    typeIds?: string[]
    statusIds?: string[]
    companyIds?: string[]
    contactIds?: string[]
    createUserIds?: string[]
    responsibleUserIds?: string[]
    allAttributes?: boolean
    attributes?: { [key: string]: string }
    positionsProductIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
