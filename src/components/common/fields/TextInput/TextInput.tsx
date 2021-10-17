import { Form, Input, InputOnChangeData, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface TextInputProps {
    type: 'text'
    required?: boolean
    label?: string
    value?: string
    width?: SemanticWIDTHS
    onChange?: (_: any, data: InputOnChangeData) => void
}

const TextInput: FC<TextInputProps> = ({ required, label, value, onChange }) => (
    <Form.Field required={required ?? false}>
        <label>{label}:</label>
        <Input type="text" required={required} placeholder={label} value={value ?? ''} onChange={onChange} fluid />
    </Form.Field>
)

export default TextInput
