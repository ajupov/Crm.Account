import AttributeLinks, { AttributeLinksItemProps } from '../AttributeLinks/AttributeLinks'
import {
    Button,
    Card,
    Checkbox,
    CheckboxProps,
    DropdownProps,
    Form,
    Icon,
    Input,
    InputOnChangeData,
    Select
} from 'semantic-ui-react'
import React, { FC, useCallback, useMemo } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/dateTimeTextHelper'

import BackLink from '../BackLink/BackLink'
import HistoryLink from '../HistoryLink/HistoryLink'
import Loader from '../Loader/Loader'
import { SelectOptionCreateFieldProps } from '../Create/Create'

export type EditFieldProps =
    | TextEditFieldProps
    | NumberFilterFieldProps
    | DateEditFieldProps
    | CheckboxEditFieldProps
    | SelectEditFieldProps
    | AttributeLinksFieldProps

export interface TextEditFieldProps {
    required?: boolean
    type: 'text'
    topLabel: string
    value?: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface NumberFilterFieldProps {
    required?: boolean
    type: 'number'
    topLabel: string
    value?: number
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface DateEditFieldProps {
    required?: boolean
    type: 'date'
    topLabel: string
    value?: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface CheckboxEditFieldProps {
    type: 'checkbox'
    label: string
    checked: boolean
    onChange: (_: any, { value }: CheckboxProps) => void
}

export interface SelectOptionEditFieldProps {
    value: number | string
    text: string
}

export interface SelectEditFieldProps {
    required?: boolean
    type: 'select'
    isMultiple?: boolean
    label: string
    value?: number | string | (number | string)[]
    text?: string
    options: SelectOptionEditFieldProps[]
    onChange: (_: any, { value }: DropdownProps) => void
}

export interface AttributeLinksFieldProps {
    required?: boolean
    type: 'attributes'
    label: string
    options: SelectOptionCreateFieldProps[]
    items?: AttributeLinksItemProps[]
    onClickAddItem: () => void
}

export interface EditProps {
    id: string
    fields: EditFieldProps[]
    isLoading: boolean
    isConfirmEnabled: boolean
    createDate?: string
    lastModifyDateTime?: string
    onClickHistory: (id: string) => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Edit: FC<EditProps> = ({
    id,
    fields,
    isLoading,
    isConfirmEnabled,
    createDate,
    lastModifyDateTime,
    onClickHistory,
    onClickConfirm,
    onClickCancel
}) => {
    const _onClickHistory = useCallback(
        (event: React.MouseEvent) => {
            if (id) {
                onClickHistory(id)
            }

            event.stopPropagation()
        },
        [id, onClickHistory]
    )

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
            <Loader isLoading={isLoading} />
            <BackLink onClick={onClickCancel} />
            <HistoryLink onClick={_onClickHistory} />
            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
            <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
            <Form onSubmit={onClickConfirm}>
                {fieldComponents}
                <Form.Field>
                    <Button.Group basic floated="right">
                        <Button type="reset" onClick={onClickCancel}>
                            <Icon name="cancel" /> Отмена
                        </Button>
                        <Button type="submit" disabled={!isConfirmEnabled}>
                            <Icon name="save" /> Сохранить
                        </Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        </>
    )
}

export default Edit
