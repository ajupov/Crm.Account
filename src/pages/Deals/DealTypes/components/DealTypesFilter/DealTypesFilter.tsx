import React, { FC, useContext } from 'react'

import DealTypesFiltersContext from '../../contexts/DealTypesFiltersContext/DealTypesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

const DealTypesFilter: FC = () => {
    const state = useContext(DealTypesFiltersContext)

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

export default DealTypesFilter
