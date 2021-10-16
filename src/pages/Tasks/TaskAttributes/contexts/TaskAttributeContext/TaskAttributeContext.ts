import { TaskAttributeState, taskAttributeInitialState } from '../../states/TaskAttributeState'

import { createContext } from 'react'

const TaskAttributeContext = createContext<TaskAttributeState>(taskAttributeInitialState)

export default TaskAttributeContext
