import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import CustomersFiltersContext from '../../contexts/CustomersFiltersContext/CustomersFiltersContext'

const CustomersFilter: FC = () => {
    const state = useContext(CustomersFiltersContext)

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

export default CustomersFilter
