import SupplierAttributeChange from './SupplierAttributeChange'

export default interface SupplierAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: SupplierAttributeChange[]
}
