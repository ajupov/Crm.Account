import React, { FC, useContext } from 'react'

import FilterForm from '../../../../../components/common/forms/FilterForm/FilterForm'
import StockRoomsFiltersContext from '../../contexts/StockRoomsFiltersContext/StockRoomsFiltersContext'

const StockRoomsFilter: FC = () => {
    const state = useContext(StockRoomsFiltersContext)

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

export default StockRoomsFilter
