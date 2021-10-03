export default interface ActivityCommentGetPagedListRequest {
    activityId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
