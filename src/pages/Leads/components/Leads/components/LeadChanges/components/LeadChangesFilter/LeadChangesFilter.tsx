import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useLeadChangesFilters from '../../../../contexts/LeadChangesFiltersContext/hooks/useLeadChangesFilters'

const LeadChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useLeadChangesFilters()

    return (
        <FilterForm
            fields={fields}
            isApplyEnabled={isApplyEnabled}
            onApply={onApply}
            isResetEnabled={isResetEnabled}
            onReset={onReset}
        />
    )
}

export default LeadChangesFilter
