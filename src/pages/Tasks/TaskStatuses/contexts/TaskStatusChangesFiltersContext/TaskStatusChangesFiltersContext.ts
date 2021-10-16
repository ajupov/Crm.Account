import TaskStatusChangesFiltersState, {
    taskStatusChangesFiltersInitialState
} from '../../states/TaskStatusChangesFiltersState'

import { createContext } from 'react'

const TaskStatusChangesFiltersContext = createContext<TaskStatusChangesFiltersState>(
    taskStatusChangesFiltersInitialState
)

export default TaskStatusChangesFiltersContext
