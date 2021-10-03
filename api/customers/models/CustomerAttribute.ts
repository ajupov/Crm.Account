import CustomerAttributeType from './CustomerAttributeType'

export default interface CustomerAttribute {
    id?: string
    accountId?: string
    type: CustomerAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
