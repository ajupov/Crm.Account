import CompanyComment from '../models/CompanyComment'

export default interface CompanyCommentGetPagedListResponse {
    totalCount: number
    comments?: CompanyComment[]
}
