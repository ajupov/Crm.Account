import React, { FC } from 'react'

import TaskStatusContext from './TaskStatusContext'
import useTaskStatus from './hooks/useTaskStatus'

const TaskStatusContextProvider: FC = ({ children }) => {
    const state = useTaskStatus()

    return <TaskStatusContext.Provider value={state}>{children}</TaskStatusContext.Provider>
}

export default TaskStatusContextProvider
