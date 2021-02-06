import React, { FC } from 'react'

import FilterForm from '../../../../../../../components/common/forms/FilterForm/FilterForm'
import useDealTypeChangesFilters from '../../../../contexts/DealTypeChangesFiltersContext/hooks/useDealTypeChangesFilters'

const DealTypeChangesFilter: FC = () => {
    const { fields, isApplyEnabled, onApply, isResetEnabled, onReset } = useDealTypeChangesFilters()

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

export default DealTypeChangesFilter
