import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useContactAttributeChangesFilters from '../../../../contexts/ContactAttributeChangesFiltersContext/hooks/useContactAttributeChangesFilters'

const ContactAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useContactAttributeChangesFilters()

    return (
        <FilterForm
            fields={fields}
            isApplyEnabled={isApplyEnabled}
            onApply={onApply}
            isResetEnabled={isResetEnabled}
            onReset={onReset}
        />
    )
}

export default ContactAttributeChangesFilter
