import React, { FC, useContext } from 'react'

import FilterMobile from '../../../../../../components/Filter/FilterMobile'
import ProductStatusesFiltersContext from '../../contexts/ProductStatusesFiltersContext/ProductStatusesFiltersContext'

const ProductsStatusesFilterMobile: FC = () => {
    const state = useContext(ProductStatusesFiltersContext)

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

export default ProductsStatusesFilterMobile
