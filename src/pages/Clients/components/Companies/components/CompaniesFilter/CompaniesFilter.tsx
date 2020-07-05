import React, { FC, useContext } from 'react'

import ContactsFiltersContext from '../../contexts/ContactsFiltersContext/ContactsFiltersContext'
import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'

const ContactsFilter: FC = () => {
    const state = useContext(ContactsFiltersContext)

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

export default ContactsFilter
