import TaskStatus from '../../../../../api/tasks/models/TaskStatus'

export default interface TaskStatusesState {
    isLoading: boolean
    statuses: TaskStatus[]
    getAll: () => Promise<void>
}

export const taskStatusesInitialState: TaskStatusesState = {
    isLoading: false,
    statuses: [],
    getAll: () => Promise.resolve()
}
