import React, { FC } from 'react'

import Filter from '../../../../../../../../components/Filter/Filter'
import useProductAttributeChangesFilters from '../../../../contexts/ProductAttributeChangesFiltersContext/hooks/useProductAttributeChangesFilters'

const ProductAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductAttributeChangesFilters()

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

export default ProductAttributeChangesFilter
