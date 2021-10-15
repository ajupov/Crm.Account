import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import OrdersFiltersContext from '../../contexts/OrdersFiltersContext/OrdersFiltersContext'

const OrdersFilter: FC = () => {
    const state = useContext(OrdersFiltersContext)

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

export default OrdersFilter
