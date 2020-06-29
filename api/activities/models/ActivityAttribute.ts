import ActivityAttributeType from './ActivityAttributeType'

export default interface ActivityAttribute {
    id?: string
    accountId?: string
    type: ActivityAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
