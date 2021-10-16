import React, { FC } from 'react'

import TaskStatusesContext from './TaskStatusesContext'
import useTaskStatuses from './hooks/useTaskStatuses'

const TaskStatusesContextProvider: FC = ({ children }) => {
    const state = useTaskStatuses()

    return <TaskStatusesContext.Provider value={state}>{children}</TaskStatusesContext.Provider>
}

export default TaskStatusesContextProvider
