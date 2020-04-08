/* eslint-disable */
export default interface ActivityTypeChangeGetPagedListRequestParameter {
    typeId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
