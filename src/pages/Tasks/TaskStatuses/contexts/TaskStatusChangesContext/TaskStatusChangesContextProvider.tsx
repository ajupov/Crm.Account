import React, { FC } from 'react'

import TaskStatusChangesContext from './TaskStatusChangesContext'
import useTaskStatusChanges from './hooks/useTaskStatusChanges'

const TaskStatusChangesContextProvider: FC = ({ children }) => {
    const state = useTaskStatusChanges()

    return <TaskStatusChangesContext.Provider value={state}>{children}</TaskStatusChangesContext.Provider>
}

export default TaskStatusChangesContextProvider
