import TaskStatusChangesState, { taskStatusChangesInitialState } from '../../states/TaskStatusChangesState'

import { createContext } from 'react'

const TaskStatusChangesContext = createContext<TaskStatusChangesState>(taskStatusChangesInitialState)

export default TaskStatusChangesContext
