import React, { FC, useContext } from 'react'

import CustomerAttributeChangesFiltersContext from '../../../../contexts/CustomerAttributeChangesFiltersContext/CustomerAttributeChangesFiltersContext'
import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CustomersAttributeChangesFilterMobile: FC = () => {
    const state = useContext(CustomerAttributeChangesFiltersContext)

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

export default CustomersAttributeChangesFilterMobile
