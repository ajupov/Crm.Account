import { Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface TextInputProps {
    type: 'text'
    required?: boolean
    topLabel?: string
    value?: string
    onChange?: (_: any, data: InputOnChangeData) => void
}

const TextInput: FC<TextInputProps> = ({ required, topLabel, value, onChange }) => (
    <Form.Field required={required ?? false}>
        <label>{topLabel}:</label>
        <Input type="text" required={required} placeholder={topLabel} value={value ?? ''} onChange={onChange} fluid />
    </Form.Field>
)

export default TextInput
