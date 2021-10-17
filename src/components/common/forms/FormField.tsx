import AttributeLinksGroup, { AttributesLinksGroupProps } from '../fields/AttributesLinksGroupProps/AttributeLinksGroup'
import Autocomplete, { AutocompleteProps } from '../fields/Autocomplete/Autocomplete'
import Checkbox, { CheckboxProps } from '../fields/Checkbox/Checkbox'
import Collection, { CollectionProps } from '../fields/Collection/Collection'
import DateInput, { DateInputProps } from '../fields/DateInput/DateInput'
import Dropdown, { DropdownProps } from '../fields/Dropdown/Dropdown'
import Group, { GroupProps } from '../fields/Group/Group'
import NumberInput, { NumberInputProps } from '../fields/NumberInput/NumberInput'
import React, { FC, useMemo } from 'react'
import TextInput, { TextInputProps } from '../fields/TextInput/TextInput'

import { Form } from 'semantic-ui-react'

export type FormFieldProps =
    | TextInputProps
    | NumberInputProps
    | DateInputProps
    | CheckboxProps
    | DropdownProps
    | AttributesLinksGroupProps
    | AutocompleteProps
    | GroupProps
    | CollectionProps

const FormField: FC<FormFieldProps> = (props: FormFieldProps) => {
    const field = useMemo(() => {
        switch (props.type) {
            case 'text':
                return <TextInput {...props} key={props.label} />
            case 'number':
                return <NumberInput {...props} key={props.label} />
            case 'date':
                return <DateInput {...props} key={props.label} />
            case 'checkbox':
                return <Checkbox {...props} key={props.label} />
            case 'dropdown':
                return <Dropdown {...props} key={props.label} />
            case 'attributes':
                return <AttributeLinksGroup {...props} key={props.label} />
            case 'autocomplete':
                return <Autocomplete {...props} key={props.label} />
            case 'group':
                return <Group {...props} key={props.label} />
            case 'collection':
                return <Collection {...props} key={props.label} />
        }
    }, [props])

    return (
        <Form.Field width={props.width} key={props.label} required={props.required}>
            {field}
        </Form.Field>
    )
}

export default FormField
