import TaskAttributeChangesFiltersState, {
    taskAttributeChangesFiltersInitialState
} from '../../states/TaskAttributeChangesFiltersState'

import { createContext } from 'react'

const TaskAttributeChangesFiltersContext = createContext<TaskAttributeChangesFiltersState>(
    taskAttributeChangesFiltersInitialState
)

export default TaskAttributeChangesFiltersContext
