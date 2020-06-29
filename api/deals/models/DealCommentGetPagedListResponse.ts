import DealComment from '../models/DealComment'

export default interface DealCommentGetPagedListResponse {
    totalCount: number
    comments?: DealComment[]
}
