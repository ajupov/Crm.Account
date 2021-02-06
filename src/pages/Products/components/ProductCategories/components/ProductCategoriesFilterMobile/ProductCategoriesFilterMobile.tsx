import React, { FC, useContext } from 'react'

import FilterMobileModal from '../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'
import ProductCategoriesFiltersContext from '../../contexts/ProductCategoriesFiltersContext/ProductCategoriesFiltersContext'

const ProductCategoriesFilterMobile: FC = () => {
    const state = useContext(ProductCategoriesFiltersContext)

    return (
        <FilterMobileModal
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

export default ProductCategoriesFilterMobile
