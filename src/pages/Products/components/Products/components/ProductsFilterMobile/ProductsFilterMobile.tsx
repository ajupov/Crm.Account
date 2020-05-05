import React, { FC, useContext } from 'react'

import FilterMobile from '../../../../../../components/Filter/FilterMobile'
import ProductsFiltersContext from '../../contexts/ProductsFiltersContext/ProductsFiltersContext'

const ProductsFilterMobile: FC = () => {
    const state = useContext(ProductsFiltersContext)

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

export default ProductsFilterMobile
