import React, { FC, useContext } from 'react'

import ContactAttributesFiltersContext from '../../contexts/ContactAttributesFiltersContext/ContactAttributesFiltersContext'
import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'

const ContactAttributesFilter: FC = () => {
    const state = useContext(ContactAttributesFiltersContext)

    return (
        <FilterForm
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default ContactAttributesFilter
