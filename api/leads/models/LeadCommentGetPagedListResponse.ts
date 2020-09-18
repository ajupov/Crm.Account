import LeadComment from '../models/LeadComment'

export default interface LeadCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: LeadComment[]
}
