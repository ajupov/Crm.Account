import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import CustomerAttributesFiltersContext from '../../contexts/CustomerAttributesFiltersContext/CustomerAttributesFiltersContext'

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
