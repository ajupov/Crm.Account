import CustomerComment from './CustomerComment'

export default interface CustomerCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: CustomerComment[]
}
