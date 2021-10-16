import React, { FC } from 'react'

import TaskTypeContext from './TaskTypeContext'
import useTaskType from './hooks/useTaskType'

const TaskTypeContextProvider: FC = ({ children }) => {
    const state = useTaskType()

    return <TaskTypeContext.Provider value={state}>{children}</TaskTypeContext.Provider>
}

export default TaskTypeContextProvider
