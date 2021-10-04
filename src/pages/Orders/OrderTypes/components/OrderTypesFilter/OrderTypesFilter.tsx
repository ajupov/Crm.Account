import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import OrderTypesFiltersContext from '../../contexts/OrderTypesFiltersContext/OrderTypesFiltersContext'

const OrderTypesFilter: FC = () => {
    const state = useContext(OrderTypesFiltersContext)

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

export default OrderTypesFilter
