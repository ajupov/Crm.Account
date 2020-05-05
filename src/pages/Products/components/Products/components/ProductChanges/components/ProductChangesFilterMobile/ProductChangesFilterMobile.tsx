import React, { FC, useContext } from 'react'

import FilterMobile from '../../../../../../../../components/Filter/FilterMobile'
import ProductChangesFiltersContext from '../../../../contexts/ProductChangesFiltersContext/ProductChangesFiltersContext'

const ProductChangesFilterMobile: FC = () => {
    const state = useContext(ProductChangesFiltersContext)

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

export default ProductChangesFilterMobile
