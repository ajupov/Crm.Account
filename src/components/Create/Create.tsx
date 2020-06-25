import AttributeLinks, { AttributeLinksItemProps } from '../AttributeLinks/AttributeLinks'
import {
    Button,
    Checkbox,
    CheckboxProps,
    DropdownProps,
    Form,
    Icon,
    Input,
    InputOnChangeData,
    Select
} from 'semantic-ui-react'
import React, { FC, useMemo } from 'react'

import BackLink from '../BackLink/BackLink'

export type CreateFieldProps =
    | TextCreateFieldProps
    | NumberEditFieldProps
    | DateCreateFieldProps
    | CheckboxCreateFieldProps
    | SelectCreateFieldProps
    | AttributesCreateLinksFieldProps

export interface TextCreateFieldProps {
    required?: boolean
    type: 'text'
    topLabel: string
    value?: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface NumberEditFieldProps {
    required?: boolean
    type: 'number'
    topLabel: string
    value?: number
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface DateCreateFieldProps {
    required?: boolean
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

export interface SelectOptionCreateFieldProps {
    value: number | string
    text: string
}

export interface SelectCreateFieldProps {
    required?: boolean
    type: 'select'
    isMultiple?: boolean
    label: string
    value?: number | string | (number | string)[]
    text?: string
    options: SelectOptionCreateFieldProps[]
    onChange: (_: any, { value }: DropdownProps) => void
}

export interface AttributesCreateLinksFieldProps {
    required?: boolean
    type: 'attributes'
    label: string
    options: SelectOptionCreateFieldProps[]
    items?: AttributeLinksItemProps[]
    onClickAddItem: () => void
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
                                    required={x.required}
                                />
                            </Form.Field>
                        )
                    case 'number':
                        return (
                            <Form.Field required={x.required} key={x.topLabel}>
                                <label>{x.topLabel}:</label>
                                <Input
                                    type="number"
                                    min={0}
                                    precession={2}
                                    placeholder={x.topLabel}
                                    value={x.value ?? 0}
                                    onChange={x.onChange}
                                    required={x.required}
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
                                    required={x.required}
                                />
                            </Form.Field>
                        )
                    case 'checkbox':
                        return (
                            <Form.Field key={x.label}>
                                <Checkbox label={x.label} checked={x.checked} onChange={x.onChange} />
                            </Form.Field>
                        )
                    case 'select':
                        return (
                            <Form.Field required={x.required} key={x.label}>
                                <label>{x.label}:</label>
                                <Select
                                    multiple={x.isMultiple}
                                    placeholder={x.label}
                                    value={x.value}
                                    text={x.text}
                                    onChange={x.onChange}
                                    required={x.required}
                                    options={x.options.map(x => ({
                                        key: x.value,
                                        value: x.value,
                                        text: x.text
                                    }))}
                                    style={{ whiteSpace: 'nowrap' }}
                                />
                            </Form.Field>
                        )
                    case 'attributes':
                        return (
                            <Form.Field required={x.required} key={x.label}>
                                <label>{x.label}:</label>
                                <AttributeLinks items={x.items} options={x.options} onClickAddItem={x.onClickAddItem} />
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
