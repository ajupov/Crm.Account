import TaskType from '../../../../../api/tasks/models/TaskType'

export interface TaskTypeState {
    isLoading: boolean
    type: TaskType
    setType: (Type: TaskType) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const taskTypeInitialState: TaskTypeState = {
    isLoading: false,
    type: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setType: (_: TaskType) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
