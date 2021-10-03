import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useCustomerAttributeChangesFilters from '../../../../contexts/CustomerAttributeChangesFiltersContext/hooks/useCustomerAttributeChangesFilters'

const CustomerAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useCustomerAttributeChangesFilters()

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

export default CustomerAttributeChangesFilter
