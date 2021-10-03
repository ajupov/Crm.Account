export default interface ActivityStatusGetPagedListRequestParameter {
    accountId?: string
    name?: string
    isFinish?: boolean
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
