import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import SupplierAttributesFiltersContext from '../../contexts/SupplierAttributesFiltersContext/SupplierAttributesFiltersContext'

const SupplierAttributesFilter: FC = () => {
    const state = useContext(SupplierAttributesFiltersContext)

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

export default SupplierAttributesFilter
