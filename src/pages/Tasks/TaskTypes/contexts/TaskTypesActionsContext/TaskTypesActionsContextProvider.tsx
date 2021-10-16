import React, { FC } from 'react'

import TaskTypesActionsContext from './TaskTypesActionsContext'
import useTaskTypesActions from './hooks/useTaskTypesActions'

const TaskTypesActionsContextProvider: FC = ({ children }) => {
    const state = useTaskTypesActions()

    return <TaskTypesActionsContext.Provider value={state}>{children}</TaskTypesActionsContext.Provider>
}

export default TaskTypesActionsContextProvider
