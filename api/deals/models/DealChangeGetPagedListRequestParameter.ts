/* eslint-disable */
export default interface DealChangeGetPagedListRequestParameter {
    dealId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
