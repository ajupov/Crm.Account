import LeadAttributeType from './LeadAttributeType'

export default interface LeadAttribute {
    id?: string
    accountId?: string
    type: LeadAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
