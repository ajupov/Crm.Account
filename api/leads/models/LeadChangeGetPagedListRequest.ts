/* eslint-disable */
export default interface LeadChangeGetPagedListRequest {
    leadId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
