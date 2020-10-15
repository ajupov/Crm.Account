import Autocomplete, { AutocompleteProps } from '../../fields/Autocomplete/Autocomplete'
import { Button, Form, Header } from 'semantic-ui-react'
import DateInputRange, { DateInputRangeProps } from '../../fields/DateInputRange/DateInputRange'
import Dropdown, { DropdownProps } from '../../fields/Dropdown/Dropdown'
import NumberInputRange, { NumberInputRangeProps } from '../../fields/NumberInputRange/NumberInputRange'
import RadioGroup, { RadioGroupProps } from '../../fields/RadioGroup/RadioGroup'
import React, { FC, useMemo } from 'react'
import TextInput, { TextInputProps } from '../../fields/TextInput/TextInput'

export type FilterFormFieldProps =
    | TextInputProps
    | NumberInputRangeProps
    | DateInputRangeProps
    | RadioGroupProps
    | DropdownProps
    | AutocompleteProps

export interface FilterFormProps {
    fields: FilterFormFieldProps[]
    isApplyEnabled: boolean
    onApply: () => void
    isResetEnabled: boolean
    onReset: () => void
}

// TODO: Move to l10n
const FilterForm: FC<FilterFormProps> = ({ fields, isApplyEnabled, onApply, isResetEnabled, onReset }) => {
    const fieldComponents = useMemo(
        (): (JSX.Element | null)[] =>
            fields.map(x => {
                switch (x.type) {
                    case 'text':
                        return <TextInput {...x} key={x.topLabel} />
                    case 'number':
                        return <NumberInputRange {...x} key={x.topLabel} />
                    case 'date':
                        return <DateInputRange {...x} key={x.topLabel} />
                    case 'radio':
                        return <RadioGroup {...x} key={x.topLabel ?? x.label1} />
                    case 'dropdown':
                        return <Dropdown {...x} key={x.label} />
                    case 'autocomplete':
                        return <Autocomplete {...x} key={x.label} />
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

export default FilterForm
