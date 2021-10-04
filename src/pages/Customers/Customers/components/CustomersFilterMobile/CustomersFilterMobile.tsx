import React, { FC, useContext } from 'react'

import CustomersFiltersContext from '../../contexts/CustomersFiltersContext/CustomersFiltersContext'
import FilterMobileModal from '../../../../../components/common/modals/FilterMobileModal/FilterMobileModal'

const CustomersFilterMobile: FC = () => {
    const state = useContext(CustomersFiltersContext)

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

export default CustomersFilterMobile
