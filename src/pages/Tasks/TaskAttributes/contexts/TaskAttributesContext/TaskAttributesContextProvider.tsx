import React, { FC } from 'react'

import TaskAttributesContext from './TaskAttributesContext'
import useTaskAttributes from './hooks/useTaskAttributes'

const TaskAttributesContextProvider: FC = ({ children }) => {
    const state = useTaskAttributes()

    return <TaskAttributesContext.Provider value={state}>{children}</TaskAttributesContext.Provider>
}

export default TaskAttributesContextProvider
