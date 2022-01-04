import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useStockRoomChangesFilters from '../../../../contexts/StockRoomChangesFiltersContext/hooks/useStockRoomChangesFilters'

const StockRoomChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useStockRoomChangesFilters()

    return (
        <FilterForm
            fields={fields}
            isApplyEnabled={isApplyEnabled}
            onApply={onApply}
            isResetEnabled={isResetEnabled}
            onReset={onReset}
        />
    )
}

export default StockRoomChangesFilter
