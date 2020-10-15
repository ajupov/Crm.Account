import { Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface DateInputProps {
    type: 'date'
    required?: boolean
    topLabel?: string
    value?: string
    onChange: (_: any, data: InputOnChangeData) => void
}

const DateInput: FC<DateInputProps> = ({ required, topLabel, value, onChange }) => (
    <Form.Field required={required ?? false}>
        <label>{topLabel}:</label>
        <Input type="text" required={required} placeholder={topLabel} value={value ?? ''} onChange={onChange} fluid />
    </Form.Field>
)

export default DateInput
