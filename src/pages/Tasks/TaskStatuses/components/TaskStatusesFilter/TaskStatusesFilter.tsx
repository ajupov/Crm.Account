import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import TaskStatusesFiltersContext from '../../contexts/TaskStatusesFiltersContext/TaskStatusesFiltersContext'

const TaskStatusesFilter: FC = () => {
    const state = useContext(TaskStatusesFiltersContext)

    return (
        <FilterForm
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default TaskStatusesFilter
