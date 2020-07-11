import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useCompanyAttributeChangesFilters from '../../../../contexts/CompanyAttributeChangesFiltersContext/hooks/useCompanyAttributeChangesFilters'

const CompanyAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useCompanyAttributeChangesFilters()

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

export default CompanyAttributeChangesFilter
