import { Button, Card, Checkbox, CheckboxProps, Form, Icon, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/textHelper'

import BackLink from '../BackLink/BackLink'
import HistoryLink from '../HistoryLink/HistoryLink'
import Loader from '../Loader/Loader'

export type FilterFieldType = 'text' | 'date' | 'checkbox'

export interface TextEditFieldProps {
    required: boolean
    type: 'text'
    topLabel: string
    value?: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface DateEditFieldProps {
    required: boolean
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

export type EditFieldProps = TextEditFieldProps | DateEditFieldProps | CheckboxEditFieldProps

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
            <Loader isLoading={isLoading} />
            <BackLink onClick={onClickCancel} />
            <HistoryLink onClick={_onClickHistory} />
            <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
            <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
            <Form onSubmit={onClickConfirm}>
                {renderFields()}
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
