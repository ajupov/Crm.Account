import React, { FC, useContext } from 'react'

import CustomerSourceChangesFiltersContext from '../../../../contexts/CustomerSourceChangesFiltersContext/CustomerSourceChangesFiltersContext'
import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CustomersSourceChangesFilterMobile: FC = () => {
    const state = useContext(CustomerSourceChangesFiltersContext)

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

export default CustomersSourceChangesFilterMobile
