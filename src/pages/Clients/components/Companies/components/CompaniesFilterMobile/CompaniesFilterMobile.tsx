import React, { FC, useContext } from 'react'

import CompaniesFiltersContext from '../../contexts/CompaniesFiltersContext/CompaniesFiltersContext'
import FilterMobileModal from '../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CompaniesFilterMobile: FC = () => {
    const state = useContext(CompaniesFiltersContext)

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

export default CompaniesFilterMobile
