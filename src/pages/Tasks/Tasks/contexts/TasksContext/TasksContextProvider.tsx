import React, { FC } from 'react'

import TasksContext from './TasksContext'
import useTasks from './hooks/useTasks'

const TasksContextProvider: FC = ({ children }) => {
    const state = useTasks()

    return <TasksContext.Provider value={state}>{children}</TasksContext.Provider>
}

export default TasksContextProvider
