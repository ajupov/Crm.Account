import React, { FC, useContext } from 'react'

import DealStatusesFiltersContext from '../../contexts/DealStatusesFiltersContext/DealStatusesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const DealStatusesFilterMobile: FC = () => {
    const state = useContext(DealStatusesFiltersContext)

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

export default DealStatusesFilterMobile
