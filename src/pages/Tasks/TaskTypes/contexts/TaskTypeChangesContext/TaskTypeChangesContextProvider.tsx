import React, { FC } from 'react'

import TaskTypeChangesContext from './TaskTypeChangesContext'
import useTaskTypeChanges from './hooks/useTaskTypeChanges'

const TaskTypeChangesContextProvider: FC = ({ children }) => {
    const state = useTaskTypeChanges()

    return <TaskTypeChangesContext.Provider value={state}>{children}</TaskTypeChangesContext.Provider>
}

export default TaskTypeChangesContextProvider
