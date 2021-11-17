import SupplierAttributeType from './SupplierAttributeType'

export default interface SupplierAttribute {
    id?: string
    accountId?: string
    type: SupplierAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
