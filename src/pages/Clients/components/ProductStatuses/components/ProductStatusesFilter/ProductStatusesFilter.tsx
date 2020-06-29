import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../../components/common/forms/FilterForm/FilterForm'
import ProductStatusesFiltersContext from '../../contexts/ProductStatusesFiltersContext/ProductStatusesFiltersContext'

const ProductStatusesFilter: FC = () => {
    const state = useContext(ProductStatusesFiltersContext)

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

export default ProductStatusesFilter
