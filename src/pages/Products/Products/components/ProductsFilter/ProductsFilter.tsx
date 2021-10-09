import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import ProductsFiltersContext from '../../contexts/ProductsFiltersContext/ProductsFiltersContext'

const ProductsFilter: FC = () => {
    const state = useContext(ProductsFiltersContext)

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

export default ProductsFilter
