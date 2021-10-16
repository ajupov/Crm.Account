import TaskAttributesState, { taskAttributesInitialState } from '../../states/TaskAttributesState'

import { createContext } from 'react'

const TaskAttributesContext = createContext<TaskAttributesState>(taskAttributesInitialState)

export default TaskAttributesContext
