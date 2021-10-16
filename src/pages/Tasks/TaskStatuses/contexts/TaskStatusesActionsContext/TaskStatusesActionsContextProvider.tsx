import React, { FC } from 'react'

import TaskStatusesActionsContext from './TaskStatusesActionsContext'
import useTaskStatusesActions from './hooks/useTaskStatusesActions'

const TaskStatusesActionsContextProvider: FC = ({ children }) => {
    const state = useTaskStatusesActions()

    return <TaskStatusesActionsContext.Provider value={state}>{children}</TaskStatusesActionsContext.Provider>
}

export default TaskStatusesActionsContextProvider
