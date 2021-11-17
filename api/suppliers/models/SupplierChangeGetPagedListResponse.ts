import SupplierChange from './SupplierChange'

export default interface SupplierChangeGetPagedListResponse {
    totalCount: number
    changes?: SupplierChange[]
}
