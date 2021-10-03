export default interface CustomerCommentGetPagedListRequest {
    customerId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
