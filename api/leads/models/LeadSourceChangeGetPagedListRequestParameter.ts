/* eslint-disable */
export default interface LeadSourceChangeGetPagedListRequestParameter {
    sourceId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
