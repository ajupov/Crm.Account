import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useProductAttributeChangesFilters from '../../../../contexts/ProductAttributeChangesFiltersContext/hooks/useProductAttributeChangesFilters'

const ProductAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductAttributeChangesFilters()

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

export default ProductAttributeChangesFilter
