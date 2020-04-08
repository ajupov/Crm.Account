/* eslint-disable */
export default interface DealTypeChangeGetPagedListRequest {
    typeId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
