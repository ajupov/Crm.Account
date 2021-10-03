import TaskComment from './TaskComment'

export default interface TaskCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: TaskComment[]
}
