import React, { FC, useContext } from 'react'

import DealStatusesFiltersContext from '../../contexts/DealStatusesFiltersContext/DealStatusesFiltersContext'
import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'

const DealStatusesFilter: FC = () => {
    const state = useContext(DealStatusesFiltersContext)

    return (
        <FilterForm
            fields={state.fields}
            isApplyEnabled={state.isApplyEnabled}
            onApply={state.onApply}
            isResetEnabled={state.isResetEnabled}
            onReset={state.onReset}
        />
    )
}

export default DealStatusesFilter
