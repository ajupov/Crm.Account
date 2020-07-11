import React, { FC, useContext } from 'react'

import CompaniesFiltersContext from '../../contexts/CompaniesFiltersContext/CompaniesFiltersContext'
import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'

const CompaniesFilter: FC = () => {
    const state = useContext(CompaniesFiltersContext)

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

export default CompaniesFilter
