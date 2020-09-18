import ActivityComment from '../models/ActivityComment'

export default interface ActivityCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: ActivityComment[]
}
