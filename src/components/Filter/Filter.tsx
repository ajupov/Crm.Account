import { Button, Checkbox, CheckboxProps, Form, Header, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC } from 'react'

export type FilterFieldType = 'text' | 'date' | 'checkbox'

export interface TextFilterFieldProps {
    type: 'text'
    topLabel: string
    value: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface DateFilterFieldProps {
    type: 'date'
    topLabel: string
    value1: string
    onChange1: (_: any, { value }: InputOnChangeData) => void
    value2: string
    onChange2: (_: any, { value }: InputOnChangeData) => void
}

export interface CheckboxFilterFieldProps {
    type: 'checkbox'
    topLabel: string
    label1: string
    value1: string
    checked1: boolean
    label2: string
    value2: string
    checked2: boolean
    onChange: (_: any, { value }: CheckboxProps) => void
}

export type FilterFieldProps = TextFilterFieldProps | DateFilterFieldProps | CheckboxFilterFieldProps

export interface FilterProps {
    fields: FilterFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
}

const Filter: FC<FilterProps> = ({ fields, isApplyEnabled, onApply, isResetEnabled, onReset }) => {
    const renderFields = (): (JSX.Element | null)[] =>
        fields.map(x => {
            switch (x.type) {
                case 'text':
                    return (
                        <Form.Field key={x.topLabel}>
                            <label>{x.topLabel}:</label>
                            <Input
                                type="text"
                                size="mini"
                                placeholder={x.topLabel}
                                value={x.value}
                                onChange={x.onChange}
                            />
                        </Form.Field>
                    )
                case 'date':
                    return (
                        <Form.Field key={x.topLabel}>
                            <label>{x.topLabel}:</label>
                            <Input
                                type="date"
                                size="mini"
                                label="с"
                                placeholder={x.topLabel}
                                value={x.value1}
                                onChange={x.onChange1}
                            />
                            <Input
                                type="date"
                                size="mini"
                                label="по"
                                placeholder={x.topLabel}
                                value={x.value2}
                                onChange={x.onChange2}
                            />
                        </Form.Field>
                    )

                case 'checkbox':
                    return (
                        <Form.Field key={x.topLabel}>
                            <label>{x.topLabel}</label>
                            <Checkbox
                                radio
                                size="mini"
                                label={x.label1}
                                placeholder={x.topLabel}
                                value={x.value1}
                                checked={x.checked1}
                                onChange={x.onChange}
                            />
                            <br />
                            <Checkbox
                                radio
                                size="mini"
                                label={x.label2}
                                placeholder={x.topLabel}
                                value={x.value2}
                                checked={x.checked2}
                                onChange={x.onChange}
                            />
                        </Form.Field>
                    )
                default:
                    return null
            }
        })

    return (
        <>
            <Header as="h4">Фильтры</Header>
            <Form onSubmit={onApply}>
                {renderFields()}
                <Form.Field>
                    <Button.Group size="mini" floated="right">
                        <Button type="reset" basic disabled={!isResetEnabled} onClick={onReset}>
                            Сброс
                        </Button>
                        <Button type="submit" disabled={!isApplyEnabled}>
                            Применить
                        </Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        </>
    )
}

export default Filter
