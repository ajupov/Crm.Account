import TaskAttributeType from './TaskAttributeType'

export default interface TaskAttribute {
    id?: string
    accountId?: string
    type: TaskAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
