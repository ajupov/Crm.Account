import React, { FC } from 'react'

import Filter from '../../../../../../../../components/Filter/Filter'
import useProductStatusChangesFilters from '../../../../contexts/ProductStatusChangesFiltersContext/hooks/useProductStatusChangesFilters'

const ProductStatusChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductStatusChangesFilters()

    return (
        <Filter
            fields={fields}
            isApplyEnabled={isApplyEnabled}
            onApply={onApply}
            isResetEnabled={isResetEnabled}
            onReset={onReset}
        />
    )
}

export default ProductStatusChangesFilter
