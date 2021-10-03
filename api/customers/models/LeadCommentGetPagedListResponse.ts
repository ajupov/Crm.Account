import LeadComment from './LeadComment'

export default interface LeadCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: LeadComment[]
}
