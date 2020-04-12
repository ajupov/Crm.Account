import { Button, Form, Header } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface FilterProps {
    onApply: () => void
    onReset: () => void
}

const Filter: FC<FilterProps> = ({ children, onApply, onReset }) => (
    <>
        <Header as="h4">Фильтры</Header>
        <Form onSubmit={onApply}>
            {children}
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

export default Filter
