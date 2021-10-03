export default interface CustomerSourceChangeGetPagedListRequest {
    sourceId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
