import { Button, Form, Icon } from 'semantic-ui-react'
import FormField, { FormFieldProps } from '../FormField'
import React, { FC } from 'react'

import BackLink from '../../links/BackLink/BackLink'

export interface CreateFormProps {
    fields: FormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const CreateForm: FC<CreateFormProps> = ({ fields, isConfirmEnabled, onClickConfirm, onClickCancel }) => (
    <>
        <BackLink onClick={onClickCancel} />
        <Form onSubmit={onClickConfirm}>
            {fields.map((x, i) => (
                <FormField key={i} {...x} />
            ))}
            <Form.Field>
                <Button.Group basic floated="right">
                    <Button type="reset" onClick={onClickCancel}>
                        <Icon name="cancel" /> Отмена
                    </Button>
                    <Button type="submit" disabled={!isConfirmEnabled}>
                        <Icon name="save" /> Создать
                    </Button>
                </Button.Group>
            </Form.Field>
        </Form>
    </>
)

export default CreateForm
