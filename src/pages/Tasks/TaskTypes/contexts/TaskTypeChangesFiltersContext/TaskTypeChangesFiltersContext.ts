import TaskTypeChangesFiltersState, {
    taskTypeChangesFiltersInitialState
} from '../../states/TaskTypeChangesFiltersState'

import { createContext } from 'react'

const TaskTypeChangesFiltersContext = createContext<TaskTypeChangesFiltersState>(taskTypeChangesFiltersInitialState)

export default TaskTypeChangesFiltersContext
