export default interface SupplierGetPagedListRequest {
    name?: string
    phone?: string
    email?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    allAttributes?: boolean
    attributes?: { [key: string]: string }
    createUserIds?: string[]
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
