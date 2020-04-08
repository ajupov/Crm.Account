/* eslint-disable */
export default interface CompanyChangeGetPagedListRequestParameter {
    companyId: string
    changerUserId?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
