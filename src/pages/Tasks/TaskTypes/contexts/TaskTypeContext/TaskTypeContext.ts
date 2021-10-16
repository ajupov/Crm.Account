import { TaskTypeState, taskTypeInitialState } from '../../states/TaskTypeState'

import { createContext } from 'react'

const TaskTypeContext = createContext<TaskTypeState>(taskTypeInitialState)

export default TaskTypeContext
