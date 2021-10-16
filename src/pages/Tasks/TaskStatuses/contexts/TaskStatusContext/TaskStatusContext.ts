import { TaskStatusState, taskStatusInitialState } from '../../states/TaskStatusState'

import { createContext } from 'react'

const TaskStatusContext = createContext<TaskStatusState>(taskStatusInitialState)

export default TaskStatusContext
