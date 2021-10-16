import React, { FC } from 'react'

import TaskStatusesFiltersContext from './TaskStatusesFiltersContext'
import useTaskStatusesFilters from './hooks/useTaskStatusesFilters'

const TaskStatusesFiltersContextProvider: FC = ({ children }) => {
    const state = useTaskStatusesFilters()

    return <TaskStatusesFiltersContext.Provider value={state}>{children}</TaskStatusesFiltersContext.Provider>
}

export default TaskStatusesFiltersContextProvider
