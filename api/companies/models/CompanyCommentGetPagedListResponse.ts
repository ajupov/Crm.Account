import CompanyComment from '../models/CompanyComment'

export default interface CompanyCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: CompanyComment[]
}
