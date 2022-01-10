import React, { FC, useContext } from 'react'

import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'
import StockArrivalChangesFiltersContext from '../../../../contexts/StockArrivalChangesFiltersContext/StockArrivalChangesFiltersContext'

const StockArrivalChangesFilterMobile: FC = () => {
    const state = useContext(StockArrivalChangesFiltersContext)

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

export default StockArrivalChangesFilterMobile
