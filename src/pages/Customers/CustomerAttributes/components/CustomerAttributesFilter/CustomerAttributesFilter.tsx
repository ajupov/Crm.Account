import React, { FC, useContext } from 'react'

import CustomerAttributesFiltersContext from '../../contexts/CustomerAttributesFiltersContext/CustomerAttributesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

const CustomerAttributesFilter: FC = () => {
    const state = useContext(CustomerAttributesFiltersContext)

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

export default CustomerAttributesFilter
