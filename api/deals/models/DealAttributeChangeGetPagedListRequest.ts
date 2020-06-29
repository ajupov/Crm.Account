export default interface DealAttributeChangeGetPagedListRequest {
    attributeId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
