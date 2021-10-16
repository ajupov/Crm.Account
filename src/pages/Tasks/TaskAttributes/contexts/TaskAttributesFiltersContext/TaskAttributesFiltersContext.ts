import TaskAttributesFiltersState, {
    taskAttributesFiltersInitialState
} from '../../states/TaskAttributesFiltersState'

import { createContext } from 'react'

const TaskAttributesFiltersContext = createContext<TaskAttributesFiltersState>(taskAttributesFiltersInitialState)

export default TaskAttributesFiltersContext
