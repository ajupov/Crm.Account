import { Form, Select, DropdownProps as SemanticDropdownProps } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface DropdownItemProps {
    value: number | string
    text: string
}

export interface DropdownProps {
    type: 'dropdown'
    required?: boolean
    multiple?: boolean
    label: string
    value?: number | string | (number | string)[]
    text?: string
    options: DropdownItemProps[]
    onChange: (_: any, { value }: SemanticDropdownProps) => void
}

const MaxDropdownOptionsCountWithoutSearch = 5

// TODO: Move to l10n
const Dropdown: FC<DropdownProps> = ({ required, multiple, label, value, text, options, onChange }) => (
    <Form.Field required={required}>
        <label>{label}:</label>
        <Select
            fluid
            selection
            required={required}
            multiple={multiple}
            placeholder={label}
            value={value}
            text={text}
            search={options.length > MaxDropdownOptionsCountWithoutSearch}
            options={options.map(x => ({
                key: x.value,
                value: x.value,
                text: x.text
            }))}
            onChange={onChange}
            noResultsMessage="Не найдено"
            style={{ whiteSpace: 'nowrap' }}
        />
    </Form.Field>
)

export default Dropdown
