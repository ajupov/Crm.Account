import React, { FC, useContext } from 'react'

import ContactChangesFiltersContext from '../../../../contexts/ContactChangesFiltersContext/ContactChangesFiltersContext'
import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const ContactChangesFilterMobile: FC = () => {
    const state = useContext(ContactChangesFiltersContext)

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

export default ContactChangesFilterMobile
