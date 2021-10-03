export default interface OrderStatusChangeGetPagedListRequest {
    statusId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
