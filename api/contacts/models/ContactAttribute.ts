import ContactAttributeType from '../models/ContactAttributeType'

export default interface ContactAttribute {
    id?: string
    accountId?: string
    type: ContactAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
