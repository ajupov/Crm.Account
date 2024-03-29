import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import ProductAttributesFiltersContext from '../../contexts/ProductAttributesFiltersContext/ProductAttributesFiltersContext'

const ProductAttributesFilter: FC = () => {
    const state = useContext(ProductAttributesFiltersContext)

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

export default ProductAttributesFilter
