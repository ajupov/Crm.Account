import React, { FC } from 'react'

import TaskTypesContext from './TaskTypesContext'
import useTaskTypes from './hooks/useTaskTypes'

const TaskTypesContextProvider: FC = ({ children }) => {
    const state = useTaskTypes()

    return <TaskTypesContext.Provider value={state}>{children}</TaskTypesContext.Provider>
}

export default TaskTypesContextProvider
