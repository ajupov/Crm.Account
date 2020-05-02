export default interface ProductStatusChangeGetPagedListRequest {
    statusId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
