/* eslint-disable */
export default interface CompanyChangeGetPagedListRequest {
    companyId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
