import SupplierComment from './SupplierComment'

export default interface SupplierCommentGetPagedListResponse {
    hasCommentsBefore: boolean
    comments?: SupplierComment[]
}
