import React, { FC, useContext } from 'react'

import OrderStatusesFiltersContext from '../../contexts/OrderStatusesFiltersContext/OrderStatusesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const OrderStatusesFilterMobile: FC = () => {
    const state = useContext(OrderStatusesFiltersContext)

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

export default OrderStatusesFilterMobile
