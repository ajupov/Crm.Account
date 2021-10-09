import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useProductCategoryChangesFilters from '../../../../contexts/ProductCategoryChangesFiltersContext/hooks/useProductCategoryChangesFilters'

const ProductCategoryChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductCategoryChangesFilters()

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

export default ProductCategoryChangesFilter
