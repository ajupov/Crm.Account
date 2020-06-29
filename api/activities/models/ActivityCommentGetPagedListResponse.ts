import ActivityComment from '../models/ActivityComment'

export default interface ActivityCommentGetPagedListResponse {
    totalCount: number
    comments?: ActivityComment[]
}
