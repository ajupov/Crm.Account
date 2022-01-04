import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import StockBalancesFiltersContext from '../../contexts/StockBalancesFiltersContext/StockBalancesFiltersContext'

const StockBalancesFilter: FC = () => {
    const state = useContext(StockBalancesFiltersContext)

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

export default StockBalancesFilter
