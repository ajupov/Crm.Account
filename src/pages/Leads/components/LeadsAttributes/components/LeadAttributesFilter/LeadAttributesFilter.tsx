import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import LeadAttributesFiltersContext from '../../contexts/LeadAttributesFiltersContext/LeadAttributesFiltersContext'

const LeadAttributesFilter: FC = () => {
    const state = useContext(LeadAttributesFiltersContext)

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

export default LeadAttributesFilter
