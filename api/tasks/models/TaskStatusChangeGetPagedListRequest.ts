export default interface TaskStatusChangeGetPagedListRequest {
    statusId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
