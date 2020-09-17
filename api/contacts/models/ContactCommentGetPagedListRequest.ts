export default interface ContactCommentGetPagedListRequest {
    contactId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
