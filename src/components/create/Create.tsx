import { Button, Form } from 'semantic-ui-react'
import React, { FC } from 'react'

import BackLink from '../BackLink/BackLink'

export interface CreateProps {
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Create: FC<CreateProps> = ({ children, onClickConfirm, onClickCancel }) => (
    <>
        <BackLink onClick={onClickCancel} />
        <Form onSubmit={onClickConfirm}>
            {children}
            <Form.Field>
                <Button.Group floated="right">
                    <Button type="reset" basic onClick={onClickCancel}>
                        Отмена
                    </Button>
                    <Button type="submit">Создать</Button>
                </Button.Group>
            </Form.Field>
        </Form>
    </>
)

export default Create
