import React, { FC, useContext } from 'react'

import Filter from '../../../../../../components/Filter/Filter'
import ProductCategoriesFiltersContext from '../../contexts/ProductCategoriesFiltersContext/ProductCategoriesFiltersContext'

const ProductCategoriesFilter: FC = () => {
    const state = useContext(ProductCategoriesFiltersContext)

    return (
        <Filter
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default ProductCategoriesFilter
