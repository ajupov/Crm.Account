export default interface SupplierCommentGetPagedListRequest {
    supplierId: string
    beforeCreateDateTime?: string
    afterCreateDateTime?: string
    limit: number
    sortBy?: string
    orderBy?: string
}
