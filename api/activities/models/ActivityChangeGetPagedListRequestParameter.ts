/* eslint-disable */
export default interface ActivityChangeGetPagedListRequestParameter {
    activityId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
