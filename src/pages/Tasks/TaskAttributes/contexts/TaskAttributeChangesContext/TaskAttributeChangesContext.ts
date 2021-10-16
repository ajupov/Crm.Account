import TaskAttributeChangesState, { taskAttributeChangesInitialState } from '../../states/TaskAttributeChangesState'

import { createContext } from 'react'

const TaskAttributeChangesContext = createContext<TaskAttributeChangesState>(taskAttributeChangesInitialState)

export default TaskAttributeChangesContext
