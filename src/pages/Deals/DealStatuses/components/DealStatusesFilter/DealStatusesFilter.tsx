import React, { FC, useContext } from 'react'

import OrderStatusesFiltersContext from '../../contexts/OrderStatusesFiltersContext/OrderStatusesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

const OrderStatusesFilter: FC = () => {
    const state = useContext(OrderStatusesFiltersContext)

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

export default OrderStatusesFilter
