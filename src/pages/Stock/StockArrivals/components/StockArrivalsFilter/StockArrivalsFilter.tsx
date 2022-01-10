import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import StockArrivalsFiltersContext from '../../contexts/StockArrivalsFiltersContext/StockArrivalsFiltersContext'

const StockArrivalsFilter: FC = () => {
    const state = useContext(StockArrivalsFiltersContext)

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

export default StockArrivalsFilter
