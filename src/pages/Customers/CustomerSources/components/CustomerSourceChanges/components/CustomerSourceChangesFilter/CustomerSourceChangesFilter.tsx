import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useCustomerSourceChangesFilters from '../../../../contexts/CustomerSourceChangesFiltersContext/hooks/useCustomerSourceChangesFilters'

const CustomerSourceChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useCustomerSourceChangesFilters()

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

export default CustomerSourceChangesFilter
