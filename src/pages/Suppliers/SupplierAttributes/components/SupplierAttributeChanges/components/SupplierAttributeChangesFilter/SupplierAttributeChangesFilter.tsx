import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useSupplierAttributeChangesFilters from '../../../../contexts/SupplierAttributeChangesFiltersContext/hooks/useSupplierAttributeChangesFilters'

const SupplierAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useSupplierAttributeChangesFilters()

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

export default SupplierAttributeChangesFilter
