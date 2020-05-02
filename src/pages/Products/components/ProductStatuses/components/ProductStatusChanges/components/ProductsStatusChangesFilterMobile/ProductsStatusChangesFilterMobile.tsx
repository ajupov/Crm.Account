import React, { FC, useContext } from 'react'

import FilterMobile from '../../../../../../../../components/Filter/FilterMobile'
import ProductStatusChangesFiltersContext from '../../../../contexts/ProductStatusChangesFiltersContext/ProductStatusChangesFiltersContext'

const ProductsStatusChangesFilterMobile: FC = () => {
    const state = useContext(ProductStatusChangesFiltersContext)

    return (
        <FilterMobile
            isShow={state.isShowMobile}
            onShow={state.onShowMobile}
            onHide={state.onHideMobile}
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default ProductsStatusChangesFilterMobile
