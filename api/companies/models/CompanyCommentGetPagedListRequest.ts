export default interface CompanyCommentGetPagedListRequest {
    companyId: string
    value?: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
