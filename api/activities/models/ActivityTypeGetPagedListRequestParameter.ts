/* eslint-disable */
export default interface ActivityTypeGetPagedListRequestParameter {
    accountId?: string
    name?: string
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