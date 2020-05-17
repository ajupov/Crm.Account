import {
    Button,
    Checkbox,
    CheckboxProps,
    Dropdown,
    DropdownProps,
    Form,
    Header,
    Input,
    InputOnChangeData
} from 'semantic-ui-react'
import React, { FC, useMemo } from 'react'

import { SelectOptionCreateFieldProps } from '../Create/Create'

export type FilterFieldProps =
    | TextFilterFieldProps
    | NumberFilterFieldProps
    | DateFilterFieldProps
    | RadioFilterFieldProps
    | SelectFilterFieldProps

export interface TextFilterFieldProps {
    type: 'text'
    topLabel: string
    value: string
    onChange: (_: any, { value }: InputOnChangeData) => void
}

export interface NumberFilterFieldProps {
    type: 'number'
    topLabel: string
    label1?: string
    value1?: number
    onChange1: (_: any, { value }: InputOnChangeData) => void
    label2?: string
    value2?: number
    onChange2: (_: any, { value }: InputOnChangeData) => void
}

export interface DateFilterFieldProps {
    type: 'date'
    topLabel: string
    value1: string
    onChange1: (_: any, { value }: InputOnChangeData) => void
    value2: string
    onChange2: (_: any, { value }: InputOnChangeData) => void
}

export interface RadioFilterFieldProps {
    type: 'radio'
    isHorizontal?: boolean
    topLabel?: string
    label1: string
    value1: string | number | undefined
    checked1: boolean
    label2: string
    value2: string | number | undefined
    checked2: boolean
    label3?: string
    value3?: string | number | undefined
    checked3?: boolean
    onChange: (_: any, { value }: CheckboxProps) => void
}

export interface SelectFilterFieldProps {
    type: 'select'
    label: string
    values?: (number | string)[]
    options: SelectOptionCreateFieldProps[]
    onChange: (_: any, { value }: DropdownProps) => void
}

export interface FilterProps {
    fields: FilterFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
}

const Filter: FC<FilterProps> = ({ fields, isApplyEnabled, onApply, isResetEnabled, onReset }) => {
    const MaxDropdownOptionsCountWithoutSearch = 5

    const fieldComponents = useMemo(
        (): (JSX.Element | null)[] =>
            fields.map(x => {
                switch (x.type) {
                    case 'text':
                        return (
                            <Form.Field key={x.topLabel}>
                                <label>{x.topLabel}:</label>
                                <Input
                                    fluid
                                    type="text"
                                    placeholder={x.topLabel}
                                    value={x.value}
                                    onChange={x.onChange}
                                />
                            </Form.Field>
                        )
                    case 'number':
                        return (
                            <Form.Field key={x.topLabel}>
                                <label>{x.topLabel}:</label>
                                <Input
                                    fluid
                                    type="number"
                                    label="от"
                                    placeholder={x.label1}
                                    value={x.value1 ?? ''}
                                    onChange={x.onChange1}
                                    min={0}
                                />
                                <Input
                                    fluid
                                    type="number"
                                    label="до"
                                    placeholder={x.label2}
                                    value={x.value2 ?? ''}
                                    onChange={x.onChange2}
                                    min={0}
                                />
                            </Form.Field>
                        )
                    case 'date':
                        return (
                            <Form.Field key={x.topLabel}>
                                <label>{x.topLabel}:</label>
                                <Input
                                    fluid
                                    type="date"
                                    label="с"
                                    placeholder={x.topLabel}
                                    value={x.value1}
                                    onChange={x.onChange1}
                                />
                                <Input
                                    fluid
                                    type="date"
                                    label="по"
                                    placeholder={x.topLabel}
                                    value={x.value2 ?? 0}
                                    onChange={x.onChange2}
                                />
                            </Form.Field>
                        )
                    case 'radio':
                        return (
                            <Form.Field key={x.topLabel ?? x.label1} inline={x.isHorizontal}>
                                <>
                                    {x.topLabel && <label>{x.topLabel}:</label>}
                                    <Checkbox
                                        radio
                                        label={x.label1}
                                        placeholder={x.topLabel}
                                        value={x.value1}
                                        checked={x.checked1}
                                        onChange={x.onChange}
                                        style={{ marginRight: '20px' }}
                                    />
                                    {x.isHorizontal || <br />}
                                    <Checkbox
                                        radio
                                        label={x.label2}
                                        placeholder={x.topLabel}
                                        value={x.value2}
                                        checked={x.checked2}
                                        onChange={x.onChange}
                                    />
                                    {x.value3 && (
                                        <>
                                            {x.isHorizontal || <br />}
                                            <Checkbox
                                                radio
                                                label={x.label3}
                                                placeholder={x.topLabel}
                                                value={x.value3}
                                                checked={x.checked3}
                                                onChange={x.onChange}
                                            />
                                        </>
                                    )}
                                </>
                            </Form.Field>
                        )
                    case 'select':
                        return (
                            <Form.Field key={x.label}>
                                <label>{x.label}:</label>
                                <Dropdown
                                    fluid
                                    multiple
                                    selection
                                    placeholder={x.label}
                                    value={x.values}
                                    search={x.options.length > MaxDropdownOptionsCountWithoutSearch}
                                    onChange={x.onChange}
                                    options={x.options.map(x => ({
                                        key: x.value,
                                        value: x.value,
                                        text: x.text
                                    }))}
                                />
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
            <Header as="h4">Фильтры</Header>
            <Form onSubmit={onApply}>
                {fieldComponents}
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
