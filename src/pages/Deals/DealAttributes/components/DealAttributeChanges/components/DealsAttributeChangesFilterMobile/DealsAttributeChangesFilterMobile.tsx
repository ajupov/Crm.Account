import React, { FC, useContext } from 'react'

import DealAttributeChangesFiltersContext from '../../../../contexts/DealAttributeChangesFiltersContext/DealAttributeChangesFiltersContext'
import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const DealsAttributeChangesFilterMobile: FC = () => {
    const state = useContext(DealAttributeChangesFiltersContext)

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

export default DealsAttributeChangesFilterMobile
