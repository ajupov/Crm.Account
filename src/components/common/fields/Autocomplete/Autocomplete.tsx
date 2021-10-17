import { Dropdown, DropdownOnSearchChangeData, DropdownProps, Form, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC, useCallback, useState } from 'react'

export interface AutocompleteItemProps {
    value: number | string
    text: string
}

export interface AutocompleteProps {
    type: 'autocomplete'
    required?: boolean
    multiple?: boolean
    index?: number
    label: string
    value?: number | string | (number | string)[]
    text?: string
    width?: SemanticWIDTHS
    options: AutocompleteItemProps[]
    load: (value?: string) => Promise<void>
    onChange: (_: any, data: DropdownProps) => void
}

const Autocomplete: FC<AutocompleteProps> = ({
    required,
    multiple,
    index,
    label,
    value,
    text,
    options,
    load,
    onChange
}) => {
    const [isLoading, setIsLoading] = useState(false)

    const _onChange = useCallback(
        () => (event: React.SyntheticEvent, data: DropdownProps) => {
            onChange(index, data)

            event.stopPropagation()
            event.preventDefault()
        },
        [index, onChange]
    )

    const _load = useCallback(
        async (value?: string) => {
            setIsLoading(true)

            await load(value)

            setIsLoading(false)
        },
        [load]
    )

    const onSearchChange = useCallback((_, data: DropdownOnSearchChangeData) => _load(data.searchQuery), [_load])

    const onOpen = useCallback(async () => _load(), [_load])

    return (
        <Form.Field required={required}>
            <label>{label}:</label>
            <Dropdown
                fluid
                required={required}
                multiple={multiple}
                placeholder={label}
                value={value}
                text={text}
                search
                clearable
                selection
                loading={isLoading}
                options={options.map(x => ({
                    key: x.value,
                    value: x.value,
                    text: x.text
                }))}
                onOpen={onOpen}
                onSearchChange={onSearchChange}
                onChange={_onChange()}
                noResultsMessage="Не найдено"
                style={{ whiteSpace: 'nowrap' }}
            />
        </Form.Field>
    )
}

export default Autocomplete
