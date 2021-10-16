import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import TaskTypesFiltersContext from '../../contexts/TaskTypesFiltersContext/TaskTypesFiltersContext'

const TaskTypesFilter: FC = () => {
    const state = useContext(TaskTypesFiltersContext)

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

export default TaskTypesFilter
