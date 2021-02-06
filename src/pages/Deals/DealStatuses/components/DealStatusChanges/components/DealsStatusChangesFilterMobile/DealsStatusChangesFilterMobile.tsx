import React, { FC, useContext } from 'react'

import DealStatusChangesFiltersContext from '../../../../contexts/DealStatusChangesFiltersContext/DealStatusChangesFiltersContext'
import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const DealsStatusChangesFilterMobile: FC = () => {
    const state = useContext(DealStatusChangesFiltersContext)

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

export default DealsStatusChangesFilterMobile
