import React, { FC } from 'react'

import TaskStatusChangesFiltersContext from './TaskStatusChangesFiltersContext'
import useTaskStatusChangesFilters from './hooks/useTaskStatusChangesFilters'

const TaskStatusChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useTaskStatusChangesFilters()

    return (
        <TaskStatusChangesFiltersContext.Provider value={state}>{children}</TaskStatusChangesFiltersContext.Provider>
    )
}

export default TaskStatusChangesFiltersContextProvider
