import React, { FC, useContext } from 'react'

import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'
import StockConsumptionChangesFiltersContext from '../../../../contexts/StockConsumptionChangesFiltersContext/StockConsumptionChangesFiltersContext'

const StockConsumptionChangesFilterMobile: FC = () => {
    const state = useContext(StockConsumptionChangesFiltersContext)

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

export default StockConsumptionChangesFilterMobile
