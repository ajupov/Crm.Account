import React, { FC, useContext } from 'react'

import Filter from '../../../../../../components/Filter/Filter'
import ProductAttributesFiltersContext from '../../contexts/ProductAttributesFiltersContext/ProductAttributesFiltersContext'

const ProductAttributesFilter: FC = () => {
    const state = useContext(ProductAttributesFiltersContext)

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

export default ProductAttributesFilter
