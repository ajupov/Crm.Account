import ContactComment from '../models/ContactComment'

export default interface ContactCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: ContactComment[]
}
