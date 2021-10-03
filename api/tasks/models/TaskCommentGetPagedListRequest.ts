export default interface TaskCommentGetPagedListRequest {
    taskId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
