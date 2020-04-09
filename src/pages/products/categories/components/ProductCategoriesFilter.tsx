import { Button, Checkbox, Form, Header, Input } from 'semantic-ui-react'
import React, { FC } from 'react'

import useProductCategoriesFilters from '../hooks/useProductCategoriesFilters'

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
        onSubmit,
        onReset
    } = useProductCategoriesFilters()

    return (
        <>
            <Header as="h4">Фильтры</Header>

            <Form onSubmit={onSubmit}>
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

                <Form.Field>
                    <Button.Group size="mini" floated="right">
                        <Button type="reset" basic onClick={onReset}>
                            Сброс
                        </Button>
                        <Button type="submit">Применить</Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        </>
    )
}

export default ProductCategoriesFilter
