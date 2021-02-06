import React, { FC, useContext } from 'react'

import DealTypeChangesFiltersContext from '../../../../contexts/DealTypeChangesFiltersContext/DealTypeChangesFiltersContext'
import FilterMobileModal from '../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const DealsTypeChangesFilterMobile: FC = () => {
    const state = useContext(DealTypeChangesFiltersContext)

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

export default DealsTypeChangesFilterMobile
