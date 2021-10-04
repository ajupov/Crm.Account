import React, { FC, useContext } from 'react'

import CustomerSourcesFiltersContext from '../../contexts/CustomerSourcesFiltersContext/CustomerSourcesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CustomerSourcesFilterMobile: FC = () => {
    const state = useContext(CustomerSourcesFiltersContext)

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

export default CustomerSourcesFilterMobile
