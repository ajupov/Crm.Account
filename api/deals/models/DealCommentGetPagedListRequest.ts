export default interface DealCommentGetPagedListRequest {
    dealId: string
    afterCreateDateTime?: string
    limit: number
}
