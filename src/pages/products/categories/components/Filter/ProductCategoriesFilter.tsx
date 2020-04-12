import { Checkbox, Form, Input } from 'semantic-ui-react'
import React, { FC } from 'react'

import Filter from '../../../../../components/Filter/Filter'
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
        onApply,
        onReset
    } = useProductCategoriesFilters()

    return (
        <Filter onApply={onApply} onReset={onReset}>
            <Form.Field>
                <label>Наименование:</label>
                <Input type="text" size="mini" placeholder="Наименование" value={name} onChange={onChangeName} />
            </Form.Field>

            <Form.Field>
                <label>Дата создания:</label>
                <Input type="date" size="mini" label="с" value={minCreateDate} onChange={onChangeMinCreateDate} />
                <Input type="date" size="mini" label="по" value={maxCreateDate} onChange={onChangeMaxCreateDate} />
            </Form.Field>

            <Form.Field>
                <label>Дата изменения:</label>
                <Input type="date" size="mini" label="с" value={minModifyDate} onChange={onChangeMinModifyDate} />
                <Input type="date" size="mini" label="по" value={maxModifyDate} onChange={onChangeMaxModifyDate} />
            </Form.Field>

            <Form.Field>
                <label>Статус:</label>
                <Checkbox
                    radio
                    size="mini"
                    label="Действующие"
                    value="false"
                    checked={isDeleted === false}
                    onChange={onChangeIsDeleted}
                />
                <Checkbox
                    radio
                    size="mini"
                    label="Удаленные"
                    value="true"
                    checked={isDeleted}
                    onChange={onChangeIsDeleted}
                />
            </Form.Field>
        </Filter>
    )
}

export default ProductCategoriesFilter
