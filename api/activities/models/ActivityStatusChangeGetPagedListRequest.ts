export default interface ActivityStatusChangeGetPagedListRequest {
    statusId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
