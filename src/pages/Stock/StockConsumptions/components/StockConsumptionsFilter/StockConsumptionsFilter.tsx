import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import StockConsumptionsFiltersContext from '../../contexts/StockConsumptionsFiltersContext/StockConsumptionsFiltersContext'

const StockConsumptionsFilter: FC = () => {
    const state = useContext(StockConsumptionsFiltersContext)

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

export default StockConsumptionsFilter
