import React, { FC, useContext } from 'react'

import OrderAttributesFiltersContext from '../../contexts/OrderAttributesFiltersContext/OrderAttributesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

const OrderAttributesFilter: FC = () => {
    const state = useContext(OrderAttributesFiltersContext)

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

export default OrderAttributesFilter
