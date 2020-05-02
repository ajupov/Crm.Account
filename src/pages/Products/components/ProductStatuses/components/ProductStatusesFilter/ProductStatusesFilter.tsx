import React, { FC, useContext } from 'react'

import Filter from '../../../../../../components/Filter/Filter'
import ProductStatusesFiltersContext from '../../contexts/ProductStatusesFiltersContext/ProductStatusesFiltersContext'

const ProductStatusesFilter: FC = () => {
    const state = useContext(ProductStatusesFiltersContext)

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

export default ProductStatusesFilter
