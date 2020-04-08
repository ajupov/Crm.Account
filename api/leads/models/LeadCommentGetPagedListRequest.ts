/* eslint-disable */
export default interface LeadCommentGetPagedListRequest {
    leadId: string
    value?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
