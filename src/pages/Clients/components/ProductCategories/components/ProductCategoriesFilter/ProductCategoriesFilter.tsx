import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import ProductCategoriesFiltersContext from '../../contexts/ProductCategoriesFiltersContext/ProductCategoriesFiltersContext'

const ProductCategoriesFilter: FC = () => {
    const state = useContext(ProductCategoriesFiltersContext)

    return (
        <FilterForm
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default ProductCategoriesFilter
