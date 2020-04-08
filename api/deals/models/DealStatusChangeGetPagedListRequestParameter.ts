/* eslint-disable */
export default interface DealStatusChangeGetPagedListRequestParameter {
    statusId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
