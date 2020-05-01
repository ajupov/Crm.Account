import { Button, Checkbox, CheckboxProps, Form, Icon, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useMemo } from 'react'

import BackLink from '../BackLink/BackLink'

export type CreateFieldProps = TextCreateFieldProps | DateCreateFieldProps | CheckboxCreateFieldProps

export interface TextCreateFieldProps {
    required: boolean
    type: 'text'
    topLabel: string
    value?: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface DateCreateFieldProps {
    required: boolean
    type: 'date'
    topLabel: string
    value?: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface CheckboxCreateFieldProps {
    type: 'checkbox'
    label: string
    checked: boolean
    onChange: (_: any, { value }: CheckboxProps) => void
}

export interface CreateProps {
    fields: CreateFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Create: FC<CreateProps> = ({ fields, isConfirmEnabled, onClickConfirm, onClickCancel }) => {
    const fieldComponents = useMemo(
        () =>
            fields.map(x => {
                switch (x.type) {
                    case 'text':
                        return (
                            <Form.Field required={x.required} key={x.topLabel}>
                                <label>{x.topLabel}:</label>
                                <Input
                                    type="text"
                                    placeholder={x.topLabel}
                                    value={x.value ?? ''}
                                    onChange={x.onChange}
                                />
                            </Form.Field>
                        )
                    case 'date':
                        return (
                            <Form.Field required={x.required} key={x.topLabel}>
                                <label>{x.topLabel}:</label>
                                <Input
                                    type="date"
                                    placeholder={x.topLabel}
                                    value={x.value ?? ''}
                                    onChange={x.onChange}
                                />
                            </Form.Field>
                        )
                    case 'checkbox':
                        return (
                            <Form.Field key={x.label}>
                                <Checkbox label={x.label} checked={x.checked} onChange={x.onChange} />
                            </Form.Field>
                        )
                    default:
                        return null
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

export default Create