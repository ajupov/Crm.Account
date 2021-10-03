import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import CustomerSourcesFiltersContext from '../../contexts/CustomerSourcesFiltersContext/CustomerSourcesFiltersContext'

const CustomerSourcesFilter: FC = () => {
    const state = useContext(CustomerSourcesFiltersContext)

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

export default CustomerSourcesFilter
