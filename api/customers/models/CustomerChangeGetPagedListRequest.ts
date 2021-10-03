export default interface CustomerChangeGetPagedListRequest {
    customerId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
