import React, { FC, useContext } from 'react'

import DealAttributesFiltersContext from '../../contexts/DealAttributesFiltersContext/DealAttributesFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const DealsAttributesFilterMobile: FC = () => {
    const state = useContext(DealAttributesFiltersContext)

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

export default DealsAttributesFilterMobile
