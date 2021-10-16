import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import TaskAttributesFiltersContext from '../../contexts/TaskAttributesFiltersContext/TaskAttributesFiltersContext'

const TaskAttributesFilter: FC = () => {
    const state = useContext(TaskAttributesFiltersContext)

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

export default TaskAttributesFilter
