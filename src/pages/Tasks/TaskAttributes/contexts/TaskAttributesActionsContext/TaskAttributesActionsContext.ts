import TaskAttributesActionsState, {
    taskAttributesActionsInitialState
} from '../../states/TaskAttributesActionsState'

import { createContext } from 'react'

const TaskAttributesActionsContext = createContext<TaskAttributesActionsState>(taskAttributesActionsInitialState)

export default TaskAttributesActionsContext
