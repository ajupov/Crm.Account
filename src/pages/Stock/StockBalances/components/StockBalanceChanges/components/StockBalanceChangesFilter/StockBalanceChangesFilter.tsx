import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useStockBalanceChangesFilters from '../../../../contexts/StockBalanceChangesFiltersContext/hooks/useStockBalanceChangesFilters'

const StockBalanceChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useStockBalanceChangesFilters()

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

export default StockBalanceChangesFilter
