import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import SuppliersFiltersContext from '../../contexts/SuppliersFiltersContext/SuppliersFiltersContext'

const SuppliersFilter: FC = () => {
    const state = useContext(SuppliersFiltersContext)

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

export default SuppliersFilter
