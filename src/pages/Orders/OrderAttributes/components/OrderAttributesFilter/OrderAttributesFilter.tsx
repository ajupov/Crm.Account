import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import OrderAttributesFiltersContext from '../../contexts/OrderAttributesFiltersContext/OrderAttributesFiltersContext'

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
