import TaskAttribute from '../../../../../api/tasks/models/TaskAttribute'
import TaskAttributeType from '../../../../../api/tasks/models/TaskAttributeType'

export interface TaskAttributeState {
    isLoading: boolean
    attribute: TaskAttribute
    setAttribute: (attribute: TaskAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const taskAttributeInitialState: TaskAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: TaskAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: TaskAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
