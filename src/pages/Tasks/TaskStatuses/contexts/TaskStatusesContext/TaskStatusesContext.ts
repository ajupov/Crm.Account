import TaskStatusesState, { taskStatusesInitialState } from '../../states/TaskStatusesState'

import { createContext } from 'react'

const TaskStatusesContext = createContext<TaskStatusesState>(taskStatusesInitialState)

export default TaskStatusesContext
