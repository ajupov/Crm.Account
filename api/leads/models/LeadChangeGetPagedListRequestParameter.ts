/* eslint-disable */
export default interface LeadChangeGetPagedListRequestParameter {
    leadId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
