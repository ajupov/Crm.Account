import React, { FC, useContext } from 'react'

import CompanyAttributesFiltersContext from '../../contexts/CompanyAttributesFiltersContext/CompanyAttributesFiltersContext'
import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'

const CompanyAttributesFilter: FC = () => {
    const state = useContext(CompanyAttributesFiltersContext)

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

export default CompanyAttributesFilter
