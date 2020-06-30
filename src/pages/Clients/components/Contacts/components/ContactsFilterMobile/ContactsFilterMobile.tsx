import React, { FC, useContext } from 'react'

import ContactsFiltersContext from '../../contexts/ContactsFiltersContext/ContactsFiltersContext'
import FilterMobileModal from '../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const ContactsFilterMobile: FC = () => {
    const state = useContext(ContactsFiltersContext)

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

export default ContactsFilterMobile
