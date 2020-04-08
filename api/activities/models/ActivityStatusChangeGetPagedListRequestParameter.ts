/* eslint-disable */
export default interface ActivityStatusChangeGetPagedListRequestParameter {
    statusId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
