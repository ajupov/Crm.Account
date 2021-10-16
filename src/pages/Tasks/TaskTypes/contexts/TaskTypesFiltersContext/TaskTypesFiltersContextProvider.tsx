import React, { FC } from 'react'

import TaskTypesFiltersContext from './TaskTypesFiltersContext'
import useTaskTypesFilters from './hooks/useTaskTypesFilters'

const TaskTypesFiltersContextProvider: FC = ({ children }) => {
    const state = useTaskTypesFilters()

    return <TaskTypesFiltersContext.Provider value={state}>{children}</TaskTypesFiltersContext.Provider>
}

export default TaskTypesFiltersContextProvider
