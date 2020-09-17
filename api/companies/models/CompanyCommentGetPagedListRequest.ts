export default interface CompanyCommentGetPagedListRequest {
    companyId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
