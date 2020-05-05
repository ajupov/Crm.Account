import React, { FC, useContext } from 'react'

import Filter from '../../../../../../components/Filter/Filter'
import ProductsFiltersContext from '../../contexts/ProductsFiltersContext/ProductsFiltersContext'

const ProductsFilter: FC = () => {
    const state = useContext(ProductsFiltersContext)

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

export default ProductsFilter
