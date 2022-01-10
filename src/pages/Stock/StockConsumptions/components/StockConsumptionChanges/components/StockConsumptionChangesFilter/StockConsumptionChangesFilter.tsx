import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useStockConsumptionChangesFilters from '../../../../contexts/StockConsumptionChangesFiltersContext/hooks/useStockConsumptionChangesFilters'

const StockConsumptionChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useStockConsumptionChangesFilters()

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

export default StockConsumptionChangesFilter
