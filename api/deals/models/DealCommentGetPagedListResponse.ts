import DealComment from '../models/DealComment'

export default interface DealCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: DealComment[]
}
