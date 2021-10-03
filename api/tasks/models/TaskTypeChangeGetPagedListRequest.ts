export default interface TaskTypeChangeGetPagedListRequest {
    typeId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
