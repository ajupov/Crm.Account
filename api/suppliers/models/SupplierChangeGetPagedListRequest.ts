export default interface SupplierChangeGetPagedListRequest {
    supplierId: string
    minCreateDate?: string
    maxCreateDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
