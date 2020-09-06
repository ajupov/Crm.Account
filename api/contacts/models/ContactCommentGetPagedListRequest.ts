export default interface ContactCommentGetPagedListRequest {
    contactId: string
    afterCreateDateTime?: string
    limit: number
}
