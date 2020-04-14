import React, { FC } from 'react'

import Filter from '../../../../../../components/Filter/Filter'
import useProductCategoriesFilters from './hooks/useProductCategoriesFilters'

const ProductCategoriesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductCategoriesFilters()

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

export default ProductCategoriesFilter
