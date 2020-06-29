import React, { FC } from 'react'

import FilterForm from '../../../../../../../../components/common/forms/FilterForm/FilterForm'
import useProductChangesFilters from '../../../../contexts/ProductChangesFiltersContext/hooks/useProductChangesFilters'

const ProductChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useProductChangesFilters()

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

export default ProductChangesFilter
