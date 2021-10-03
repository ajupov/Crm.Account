import React, { FC, useContext } from 'react'

import OrderTypeChangesFiltersContext from '../../../../contexts/OrderTypeChangesFiltersContext/OrderTypeChangesFiltersContext'
import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const OrdersTypeChangesFilterMobile: FC = () => {
    const state = useContext(OrderTypeChangesFiltersContext)

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

export default OrdersTypeChangesFilterMobile
