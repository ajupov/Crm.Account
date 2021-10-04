import React, { FC, useContext } from 'react'

import CustomerAttributesFiltersContext from '../../contexts/CustomerAttributesFiltersContext/CustomerAttributesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CustomerAttributesFilterMobile: FC = () => {
    const state = useContext(CustomerAttributesFiltersContext)

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

export default CustomerAttributesFilterMobile
