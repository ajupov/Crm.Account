import TasksState, { tasksInitialState } from '../../states/TasksState'

import { createContext } from 'react'

const TasksContext = createContext<TasksState>(tasksInitialState)

export default TasksContext
