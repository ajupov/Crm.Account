import { Form, Input, InputOnChangeData, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface TextInputProps {
    type: 'text'
    required?: boolean
    label?: string
    value?: string
    index?: number
    width?: SemanticWIDTHS
    onChange?: (_: any, data: InputOnChangeData) => void
}

const TextInput: FC<TextInputProps> = ({ required, label, value, index, onChange }) => {
    const _onChange = useCallback(
        () => (event: React.FormEvent<HTMLInputElement>, data: InputOnChangeData) => {
            if (onChange) {
                onChange(index, data)
            }

            event.stopPropagation()
            event.preventDefault()
        },
        [index, onChange]
    )

    return (
        <Form.Field required={required ?? false}>
            <label>{label}:</label>
            <Input
                type="text"
                required={required}
                placeholder={label}
                value={value ?? ''}
                onChange={_onChange()}
                fluid
            />
        </Form.Field>
    )
}

export default TextInput
