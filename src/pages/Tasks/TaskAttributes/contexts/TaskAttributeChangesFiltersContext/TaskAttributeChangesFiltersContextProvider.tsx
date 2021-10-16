import React, { FC } from 'react'

import TaskAttributeChangesFiltersContext from './TaskAttributeChangesFiltersContext'
import useTaskAttributeChangesFilters from './hooks/useTaskAttributeChangesFilters'

const TaskAttributeChangesFiltersContextProvider: FC = ({ children }) => {
    const state = useTaskAttributeChangesFilters()

    return (
        <TaskAttributeChangesFiltersContext.Provider value={state}>
            {children}
        </TaskAttributeChangesFiltersContext.Provider>
    )
}

export default TaskAttributeChangesFiltersContextProvider
