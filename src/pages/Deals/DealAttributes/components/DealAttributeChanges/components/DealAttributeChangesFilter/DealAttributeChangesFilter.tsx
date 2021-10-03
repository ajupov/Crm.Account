import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useOrderAttributeChangesFilters from '../../../../contexts/OrderAttributeChangesFiltersContext/hooks/useOrderAttributeChangesFilters'

const OrderAttributeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useOrderAttributeChangesFilters()

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

export default OrderAttributeChangesFilter
