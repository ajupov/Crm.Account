import TaskTypeChangesState, { taskTypeChangesInitialState } from '../../states/TaskTypeChangesState'

import { createContext } from 'react'

const TaskTypeChangesContext = createContext<TaskTypeChangesState>(taskTypeChangesInitialState)

export default TaskTypeChangesContext
