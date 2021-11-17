import SupplierAttributeLink from './SupplierAttributeLink'

export default interface Supplier {
    id?: string
    accountId?: string
    createUserId?: string
    name?: string
    phone?: string
    email?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    attributeLinks?: SupplierAttributeLink[]
}
