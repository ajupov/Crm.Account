import React, { FC } from 'react'

import TaskTypeChangesFiltersContext from './TaskTypeChangesFiltersContext'
import useTaskTypeChangesFilters from './hooks/useTaskTypeChangesFilters'

const TaskTypeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useTaskTypeChangesFilters()

    return <TaskTypeChangesFiltersContext.Provider value={state}>{children}</TaskTypeChangesFiltersContext.Provider>
}

export default TaskTypeChangesFiltersContextProvider
