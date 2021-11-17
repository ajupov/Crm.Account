import Supplier from './Supplier'

export default interface SupplierGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    suppliers?: Supplier[]
}
