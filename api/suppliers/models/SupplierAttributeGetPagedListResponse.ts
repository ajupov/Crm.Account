import SupplierAttribute from './SupplierAttribute'

export default interface SupplierAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: SupplierAttribute[]
}
