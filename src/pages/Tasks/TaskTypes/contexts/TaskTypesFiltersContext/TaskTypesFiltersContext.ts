import TaskTypesFiltersState, { taskTypesFiltersInitialState } from '../../states/TaskTypesFiltersState'

import { createContext } from 'react'

const TaskTypesFiltersContext = createContext<TaskTypesFiltersState>(taskTypesFiltersInitialState)

export default TaskTypesFiltersContext
