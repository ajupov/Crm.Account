import ProductAttributeType from './ProductAttributeType'

export default interface ProductAttribute {
    id?: string
    accountId?: string
    type: ProductAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
