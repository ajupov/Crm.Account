/* eslint-disable */
export default interface ContactAttributeChangeGetPagedListRequestParameter {
    attributeId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
