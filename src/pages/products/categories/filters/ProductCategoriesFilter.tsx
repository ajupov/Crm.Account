import { Button, Checkbox, Form, Header, Input } from 'semantic-ui-react'
import React, { FC } from 'react'

const ProductCategoriesFilter: FC = () => (
    <>
        <Header as="h4">Фильтры</Header>

        <Form>
            <Form.Field>
                <label>Наименование:</label>
                <Input size="mini" fluid placeholder="Наименование" />
            </Form.Field>

            <Form.Field>
                <label>Дата создания:</label>
                <Input size="mini" type="date" value="2020-03-01" min="2020-03-01" label="с" />
                <Input size="mini" type="date" value="2021-03-01" min="2020-03-01" label="по" />
            </Form.Field>

            <Form.Field>
                <label>Статус:</label>
                <Checkbox size="mini" radio label="Действующие" name="checkboxRadioGroup" checked />
                <Checkbox size="mini" radio label="Удаленные" name="checkboxRadioGroup" />
            </Form.Field>

            <Form.Field>
                <Button.Group size="mini" floated="right">
                    <Button basic>Сброc</Button>

                    <Button>Применить</Button>
                </Button.Group>
            </Form.Field>
        </Form>
    </>
)

export default ProductCategoriesFilter
