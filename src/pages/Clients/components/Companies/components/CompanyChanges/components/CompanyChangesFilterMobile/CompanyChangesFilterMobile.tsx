import React, { FC, useContext } from 'react'

import CompanyChangesFiltersContext from '../../../../contexts/CompanyChangesFiltersContext/CompanyChangesFiltersContext'
import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CompanyChangesFilterMobile: FC = () => {
    const state = useContext(CompanyChangesFiltersContext)

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

export default CompanyChangesFilterMobile
