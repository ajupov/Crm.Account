import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import LeadSourcesFiltersContext from '../../contexts/LeadSourcesFiltersContext/LeadSourcesFiltersContext'

const LeadSourcesFilter: FC = () => {
    const state = useContext(LeadSourcesFiltersContext)

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

export default LeadSourcesFilter
