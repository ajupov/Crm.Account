import React, { FC, useContext } from 'react'

import CompanyAttributeChangesFiltersContext from '../../../../contexts/CompanyAttributeChangesFiltersContext/CompanyAttributeChangesFiltersContext'
import FilterMobileModal from '../../../../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CompaniesAttributeChangesFilterMobile: FC = () => {
    const state = useContext(CompanyAttributeChangesFiltersContext)

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

export default CompaniesAttributeChangesFilterMobile
