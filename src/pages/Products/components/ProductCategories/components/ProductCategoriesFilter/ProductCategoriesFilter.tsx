import Filter, { FilterFieldProps } from '../../../../../../components/Filter/Filter'
import React, { FC } from 'react'

import useProductCategoriesFilters from './hooks/useProductCategoriesFilters'

const ProductCategoriesFilter: FC = () => {
    const {
        name,
        onChangeName,
        isDeleted,
        onChangeIsDeleted,
        minCreateDate,
        onChangeMinCreateDate,
        maxCreateDate,
        onChangeMaxCreateDate,
        minModifyDate,
        onChangeMinModifyDate,
        maxModifyDate,
        onChangeMaxModifyDate,
        isApplyEnabled,
        onApply,
        isResetEnabled,
        onReset
    } = useProductCategoriesFilters()

    const fields: FilterFieldProps[] = [
        {
            type: 'text',
            topLabel: 'Наименование',
            value: name,
            onChange: onChangeName
        },
        {
            type: 'date',
            topLabel: 'Дата создания',
            value1: minCreateDate,
            onChange1: onChangeMinCreateDate,
            value2: maxCreateDate,
            onChange2: onChangeMaxCreateDate
        },
        {
            type: 'date',
            topLabel: 'Дата изменения',
            value1: minModifyDate,
            onChange1: onChangeMinModifyDate,
            value2: maxModifyDate,
            onChange2: onChangeMaxModifyDate
        },
        {
            type: 'checkbox',
            topLabel: 'Статус',
            label1: 'Действующие',
            value1: 'true',
            checked1: isDeleted === false,
            label2: 'Удаленные',
            value2: 'true',
            checked2: isDeleted,
            onChange: onChangeIsDeleted
        }
    ]
    return (
        <Filter
            isApplyEnabled={isApplyEnabled}
            onApply={onApply}
            isResetEnabled={isResetEnabled}
            onReset={onReset}
            fields={fields}
        />
    )
}

export default ProductCategoriesFilter
