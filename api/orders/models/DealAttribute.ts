import DealAttributeType from './DealAttributeType'

export default interface DealAttribute {
    id?: string
    accountId?: string
    type: DealAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
