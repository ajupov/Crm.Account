import ActivityComment from './ActivityComment'

export default interface ActivityCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: ActivityComment[]
}
