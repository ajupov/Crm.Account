export default interface OrderTypeChangeGetPagedListRequest {
    typeId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
