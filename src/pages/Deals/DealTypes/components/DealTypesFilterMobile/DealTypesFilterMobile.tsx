import React, { FC, useContext } from 'react'

import DealTypesFiltersContext from '../../contexts/DealTypesFiltersContext/DealTypesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const DealTypesFilterMobile: FC = () => {
    const state = useContext(DealTypesFiltersContext)

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

export default DealTypesFilterMobile
