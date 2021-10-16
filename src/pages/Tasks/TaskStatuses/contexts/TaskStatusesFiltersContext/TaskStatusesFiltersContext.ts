import TaskStatusesFiltersState, { taskStatusesFiltersInitialState } from '../../states/TaskStatusesFiltersState'

import { createContext } from 'react'

const TaskStatusesFiltersContext = createContext<TaskStatusesFiltersState>(taskStatusesFiltersInitialState)

export default TaskStatusesFiltersContext
