import React, { FC, useContext } from 'react'

import ContactAttributesFiltersContext from '../../contexts/ContactAttributesFiltersContext/ContactAttributesFiltersContext'
import FilterMobileModal from '../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const ContactAttributesFilterMobile: FC = () => {
    const state = useContext(ContactAttributesFiltersContext)

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

export default ContactAttributesFilterMobile
