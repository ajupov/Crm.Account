import React, { FC, useContext } from 'react'

import DealAttributesFiltersContext from '../../contexts/DealAttributesFiltersContext/DealAttributesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

const DealAttributesFilter: FC = () => {
    const state = useContext(DealAttributesFiltersContext)

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

export default DealAttributesFilter
