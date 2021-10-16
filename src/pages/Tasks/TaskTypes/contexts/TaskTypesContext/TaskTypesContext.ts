import TaskTypesState, { taskTypesInitialState } from '../../states/TaskTypesState'

import { createContext } from 'react'

const TaskTypesContext = createContext<TaskTypesState>(taskTypesInitialState)

export default TaskTypesContext
