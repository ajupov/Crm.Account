import DealComment from './DealComment'

export default interface DealCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: DealComment[]
}
