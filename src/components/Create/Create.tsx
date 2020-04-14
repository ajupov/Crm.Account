import { Button, Checkbox, CheckboxProps, Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC } from 'react'

import BackLink from '../BackLink/BackLink'

export type FilterFieldType = 'text' | 'date' | 'checkbox'

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

export type CreateFieldProps = TextCreateFieldProps | DateCreateFieldProps | CheckboxCreateFieldProps

export interface CreateProps {
    fields: CreateFieldProps[]
    isConfirmEnabled: boolean
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Create: FC<CreateProps> = ({ fields, isConfirmEnabled, onClickConfirm, onClickCancel }) => {
    const renderFields = (): (JSX.Element | null)[] =>
        fields.map(x => {
            switch (x.type) {
                case 'text':
                    return (
                        <Form.Field required={x.required} key={x.topLabel}>
                            <label>{x.topLabel}:</label>
                            <Input type="text" placeholder={x.topLabel} value={x.value ?? ''} onChange={x.onChange} />
                        </Form.Field>
                    )
                case 'date':
                    return (
                        <Form.Field required={x.required} key={x.topLabel}>
                            <label>{x.topLabel}:</label>
                            <Input type="date" placeholder={x.topLabel} value={x.value ?? ''} onChange={x.onChange} />
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
        })

    return (
        <>
            <BackLink onClick={onClickCancel} />
            <Form onSubmit={onClickConfirm}>
                {renderFields()}
                <Form.Field>
                    <Button.Group floated="right">
                        <Button type="reset" basic onClick={onClickCancel}>
                            Отмена
                        </Button>
                        <Button type="submit" disabled={!isConfirmEnabled}>
                            Создать
                        </Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        </>
    )
}

export default Create
