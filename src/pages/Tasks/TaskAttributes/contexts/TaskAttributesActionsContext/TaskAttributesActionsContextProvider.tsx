import React, { FC } from 'react'

import TaskAttributesActionsContext from './TaskAttributesActionsContext'
import useTaskAttributesActions from './hooks/useTaskAttributesActions'

const TaskAttributesActionsContextProvider: FC = ({ children }) => {
    const state = useTaskAttributesActions()

    return <TaskAttributesActionsContext.Provider value={state}>{children}</TaskAttributesActionsContext.Provider>
}

export default TaskAttributesActionsContextProvider
