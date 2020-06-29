import React, { FC, useContext } from 'react'

import ContactAttributeChangesFiltersContext from '../../../../contexts/ContactAttributeChangesFiltersContext/ContactAttributeChangesFiltersContext'
import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const ContactsAttributeChangesFilterMobile: FC = () => {
    const state = useContext(ContactAttributeChangesFiltersContext)

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

export default ContactsAttributeChangesFilterMobile
