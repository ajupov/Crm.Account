import React, { FC, useContext } from 'react'

import OrderStatusChangesFiltersContext from '../../../../contexts/OrderStatusChangesFiltersContext/OrderStatusChangesFiltersContext'
import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const OrdersStatusChangesFilterMobile: FC = () => {
    const state = useContext(OrderStatusChangesFiltersContext)

    return (
        <FilterMobileModal
            isShow={state.isShowMobile}
            onShow={state.onShowMobile}
            onHide={state.onHideMobile}
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default OrdersStatusChangesFilterMobile
