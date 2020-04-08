/* eslint-disable */
export default interface ContactChangeGetPagedListRequestParameter {
    contactId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
