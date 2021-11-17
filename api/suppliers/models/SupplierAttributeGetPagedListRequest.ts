import SupplierAttributeType from './SupplierAttributeType'

export default interface SupplierAttributeGetPagedListRequest {
    types?: SupplierAttributeType[]
    key?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
