import React, { FC } from 'react'

import Filter from '../../../../../../../../components/Filter/Filter'
import useProductChangesFilters from '../../../../contexts/ProductChangesFiltersContext/hooks/useProductChangesFilters'

const ProductChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductChangesFilters()

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

export default ProductChangesFilter
