import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import LeadsFiltersContext from '../../contexts/LeadsFiltersContext/LeadsFiltersContext'

const LeadsFilter: FC = () => {
    const state = useContext(LeadsFiltersContext)

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

export default LeadsFilter
