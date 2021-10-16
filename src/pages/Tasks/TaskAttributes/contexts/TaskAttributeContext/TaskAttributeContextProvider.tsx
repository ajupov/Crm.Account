import React, { FC } from 'react'

import TaskAttributeContext from './TaskAttributeContext'
import useTaskAttribute from './hooks/useTaskAttribute'

const TaskAttributeContextProvider: FC = ({ children }) => {
    const state = useTaskAttribute()

    return <TaskAttributeContext.Provider value={state}>{children}</TaskAttributeContext.Provider>
}

export default TaskAttributeContextProvider
