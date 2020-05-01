import React, { FC, useContext } from 'react'

import FilterMobile from '../../../../../../components/Filter/FilterMobile'
import ProductCategoriesFiltersContext from '../../contexts/ProductCategoriesFiltersContext/ProductCategoriesFiltersContext'

const ProductsCategoriesFilterMobile: FC = () => {
    const state = useContext(ProductCategoriesFiltersContext)

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

export default ProductsCategoriesFilterMobile
