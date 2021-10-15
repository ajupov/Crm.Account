import Task from '../../../../../api/tasks/models/Task'

export default interface TasksState {
    isLoading: boolean
    tasks: Task[]
    getAll: () => Promise<void>
}

export const tasksInitialState: TasksState = {
    isLoading: false,
    tasks: [],
    getAll: () => Promise.resolve()
}
