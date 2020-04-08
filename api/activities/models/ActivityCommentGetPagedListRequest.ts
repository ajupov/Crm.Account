/* eslint-disable */
export default interface ActivityCommentGetPagedListRequest {
    activityId: string
    value?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
