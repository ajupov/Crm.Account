import React, { FC, useContext } from 'react'

import CustomersFiltersContext from '../../contexts/CustomersFiltersContext/CustomersFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

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
