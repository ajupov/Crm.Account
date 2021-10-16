import React, { FC } from 'react'

import TaskAttributesFiltersContext from './TaskAttributesFiltersContext'
import useTaskAttributesFilters from './hooks/useTaskAttributesFilters'

const TaskAttributesFiltersContextProvider: FC = ({ children }) => {
    const state = useTaskAttributesFilters()

    return <TaskAttributesFiltersContext.Provider value={state}>{children}</TaskAttributesFiltersContext.Provider>
}

export default TaskAttributesFiltersContextProvider
