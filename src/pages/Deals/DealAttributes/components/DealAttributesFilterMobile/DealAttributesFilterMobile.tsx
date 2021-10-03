import React, { FC, useContext } from 'react'

import OrderAttributesFiltersContext from '../../contexts/OrderAttributesFiltersContext/OrderAttributesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const OrderAttributesFilterMobile: FC = () => {
    const state = useContext(OrderAttributesFiltersContext)

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

export default OrderAttributesFilterMobile
