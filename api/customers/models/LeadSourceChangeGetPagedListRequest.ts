export default interface LeadSourceChangeGetPagedListRequest {
    sourceId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
