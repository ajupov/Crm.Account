/* eslint-disable */
export default interface ActivityChangeGetPagedListRequest {
    activityId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
