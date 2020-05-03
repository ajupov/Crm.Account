import React, { FC, useContext } from 'react'

import FilterMobile from '../../../../../../components/Filter/FilterMobile'
import ProductAttributesFiltersContext from '../../contexts/ProductAttributesFiltersContext/ProductAttributesFiltersContext'

const ProductsAttributesFilterMobile: FC = () => {
    const state = useContext(ProductAttributesFiltersContext)

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

export default ProductsAttributesFilterMobile
