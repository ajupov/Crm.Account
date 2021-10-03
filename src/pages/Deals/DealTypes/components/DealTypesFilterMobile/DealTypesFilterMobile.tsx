import React, { FC, useContext } from 'react'

import OrderTypesFiltersContext from '../../contexts/OrderTypesFiltersContext/OrderTypesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const OrderTypesFilterMobile: FC = () => {
    const state = useContext(OrderTypesFiltersContext)

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

export default OrderTypesFilterMobile
