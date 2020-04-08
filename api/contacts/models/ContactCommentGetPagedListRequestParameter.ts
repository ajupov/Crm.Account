/* eslint-disable */
export default interface ContactCommentGetPagedListRequestParameter {
    contactId: string
    commentatorUserId?: string
    value?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
