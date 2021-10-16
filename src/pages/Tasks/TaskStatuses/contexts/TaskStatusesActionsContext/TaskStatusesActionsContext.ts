import TaskStatusesActionsState, { taskStatusesActionsInitialState } from '../../states/TaskStatusesActionsState'

import { createContext } from 'react'

const TaskStatusesActionsContext = createContext<TaskStatusesActionsState>(taskStatusesActionsInitialState)

export default TaskStatusesActionsContext
