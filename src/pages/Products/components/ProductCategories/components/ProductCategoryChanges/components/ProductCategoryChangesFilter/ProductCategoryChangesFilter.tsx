import React, { FC } from 'react'

import Filter from '../../../../../../../../components/Filter/Filter'
import useProductCategoryChangesFilters from '../../../../contexts/ProductCategoryChangesFiltersContext/hooks/useProductCategoryChangesFilters'

const ProductCategoryChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductCategoryChangesFilters()

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

export default ProductCategoryChangesFilter
