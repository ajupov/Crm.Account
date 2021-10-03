import TaskAttributeLink from './TaskAttributeLink'
import TaskPriority from './TaskPriority'

export default interface Task {
    id?: string
    accountId?: string
    typeId?: string
    statusId?: string
    customerId?: string
    orderId?: string
    createUserId?: string
    responsibleUserId?: string
    name?: string
    description?: string
    result?: string
    priority: TaskPriority
    startDateTime?: string
    endDateTime?: string
    deadLineDateTime?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
    attributeLinks?: TaskAttributeLink[]
}
