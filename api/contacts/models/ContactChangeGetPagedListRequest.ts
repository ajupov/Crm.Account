export default interface ContactChangeGetPagedListRequest {
    contactId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
