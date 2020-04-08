/* eslint-disable */
export default interface DealCommentGetPagedListRequest {
    dealId: string
    value?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
