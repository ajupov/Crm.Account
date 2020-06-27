import React, { FC, useContext } from 'react'

import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'
import ProductCategoryChangesFiltersContext from '../../../../contexts/ProductCategoryChangesFiltersContext/ProductCategoryChangesFiltersContext'

const ProductsCategoryChangesFilterMobile: FC = () => {
    const state = useContext(ProductCategoryChangesFiltersContext)

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

export default ProductsCategoryChangesFilterMobile
