import OrderComment from './OrderComment'

export default interface OrderCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: OrderComment[]
}
