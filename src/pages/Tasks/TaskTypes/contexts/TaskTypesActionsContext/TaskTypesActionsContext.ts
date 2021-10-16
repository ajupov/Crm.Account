import TaskTypesActionsState, { taskTypesActionsInitialState } from '../../states/TaskTypesActionsState'

import { createContext } from 'react'

const TaskTypesActionsContext = createContext<TaskTypesActionsState>(taskTypesActionsInitialState)

export default TaskTypesActionsContext
