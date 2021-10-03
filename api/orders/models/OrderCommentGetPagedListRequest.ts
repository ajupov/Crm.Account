export default interface OrderCommentGetPagedListRequest {
    orderId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
