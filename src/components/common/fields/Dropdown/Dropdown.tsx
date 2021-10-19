import { Form, Select, DropdownProps as SemanticDropdownProps, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

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
    index?: number
    width?: SemanticWIDTHS
    options: DropdownItemProps[]
    onChange: (_: any, data: SemanticDropdownProps) => void
}

const MaxDropdownOptionsCountWithoutSearch = 5

// TODO: Move to l10n
const Dropdown: FC<DropdownProps> = ({ required, multiple, label, index, value, text, options, onChange }) => {
    const _onChange = useCallback(
        () => (event: React.SyntheticEvent<HTMLElement>, data: SemanticDropdownProps) => {
            onChange(index, data)

            event.stopPropagation()
            event.preventDefault()
        },
        [index, onChange]
    )

    return (
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
                onChange={_onChange()}
                noResultsMessage="Не найдено"
                style={{ whiteSpace: 'nowrap' }}
            />
        </Form.Field>
    )
}

export default Dropdown
