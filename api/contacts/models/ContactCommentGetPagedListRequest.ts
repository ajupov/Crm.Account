/* eslint-disable */
export default interface ContactCommentGetPagedListRequest {
    contactId: string
    value?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
