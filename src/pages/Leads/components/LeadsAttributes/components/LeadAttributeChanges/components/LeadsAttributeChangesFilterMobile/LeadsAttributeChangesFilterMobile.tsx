import React, { FC, useContext } from 'react'

import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'
import LeadAttributeChangesFiltersContext from '../../../../contexts/LeadAttributeChangesFiltersContext/LeadAttributeChangesFiltersContext'

const LeadsAttributeChangesFilterMobile: FC = () => {
    const state = useContext(LeadAttributeChangesFiltersContext)

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

export default LeadsAttributeChangesFilterMobile
