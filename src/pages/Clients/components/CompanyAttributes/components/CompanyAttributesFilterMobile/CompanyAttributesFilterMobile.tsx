import React, { FC, useContext } from 'react'

import CompanyAttributesFiltersContext from '../../contexts/CompanyAttributesFiltersContext/CompanyAttributesFiltersContext'
import FilterMobileModal from '../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CompanyAttributesFilterMobile: FC = () => {
    const state = useContext(CompanyAttributesFiltersContext)

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

export default CompanyAttributesFilterMobile
