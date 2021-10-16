import React, { FC } from 'react'

import TaskAttributeChangesContext from './TaskAttributeChangesContext'
import useTaskAttributeChanges from './hooks/useTaskAttributeChanges'

const TaskAttributeChangesContextProvider: FC = ({ children }) => {
    const state = useTaskAttributeChanges()

    return <TaskAttributeChangesContext.Provider value={state}>{children}</TaskAttributeChangesContext.Provider>
}

export default TaskAttributeChangesContextProvider
