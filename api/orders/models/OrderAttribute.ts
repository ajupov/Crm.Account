import OrderAttributeType from './OrderAttributeType'

export default interface OrderAttribute {
    id?: string
    accountId?: string
    type: OrderAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
