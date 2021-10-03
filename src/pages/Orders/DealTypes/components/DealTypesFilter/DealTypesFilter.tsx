import React, { FC, useContext } from 'react'

import OrderTypesFiltersContext from '../../contexts/OrderTypesFiltersContext/OrderTypesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

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
