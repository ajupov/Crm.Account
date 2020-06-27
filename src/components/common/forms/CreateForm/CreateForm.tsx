import AttributeLinksGroup, {
    AttributesLinksGroupProps
} from '../../fields/AttributesLinksGroupProps/AttributeLinksGroup'
import { Button, Form, Icon } from 'semantic-ui-react'
import Checkbox, { CheckboxProps } from '../../fields/Checkbox/Checkbox'
import DateInput, { DateInputProps } from '../../fields/DateInput/DateInput'
import Dropdown, { DropdownProps } from '../../fields/Dropdown/Dropdown'
import NumberInput, { NumberInputProps } from '../../fields/NumberInput/NumberInput'
import React, { FC, useMemo } from 'react'
import TextInput, { TextInputProps } from '../../fields/TextInput/TextInput'

import BackLink from '../../links/BackLink/BackLink'

export type CreateFormFieldProps =
    | TextInputProps
    | NumberInputProps
    | DateInputProps
    | CheckboxProps
    | DropdownProps
    | AttributesLinksGroupProps

export interface CreateFormProps {
    fields: CreateFormFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const CreateForm: FC<CreateFormProps> = ({ fields, isConfirmEnabled, onClickConfirm, onClickCancel }) => {
    const fieldComponents = useMemo(
        () =>
            fields.map(x => {
                switch (x.type) {
                    case 'text':
                        return <TextInput {...x} key={x.topLabel} />
                    case 'number':
                        return <NumberInput {...x} key={x.topLabel} />
                    case 'date':
                        return <DateInput {...x} key={x.topLabel} />
                    case 'checkbox':
                        return <Checkbox {...x} key={x.label} />
                    case 'dropdown':
                        return <Dropdown {...x} key={x.label} />
                    case 'attributes':
                        return <AttributeLinksGroup {...x} key={x.label} />
                }
            }),
        [fields]
    )

    return (
        <>
            <BackLink onClick={onClickCancel} />
            <Form onSubmit={onClickConfirm}>
                {fieldComponents}
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
}

export default CreateForm
