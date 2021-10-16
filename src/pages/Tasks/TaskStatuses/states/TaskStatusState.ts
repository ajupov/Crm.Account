import TaskStatus from '../../../../../api/tasks/models/TaskStatus'

export interface TaskStatusState {
    isLoading: boolean
    status: TaskStatus
    setStatus: (Status: TaskStatus) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const taskStatusInitialState: TaskStatusState = {
    isLoading: false,
    status: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isFinish: false,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setStatus: (_: TaskStatus) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
