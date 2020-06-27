import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useProductStatusChangesFilters from '../../../../contexts/ProductStatusChangesFiltersContext/hooks/useProductStatusChangesFilters'

const ProductStatusChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductStatusChangesFilters()

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

export default ProductStatusChangesFilter
