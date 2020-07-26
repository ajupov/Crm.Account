import { Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface NumberInputProps {
    type: 'number'
    required?: boolean
    topLabel?: string
    value?: number
    precession?: number
    min?: number
    max?: number
    onChange?: (_: any, { value }: InputOnChangeData) => void
}

const NumberInput: FC<NumberInputProps> = ({ required, topLabel, value, precession, min, max, onChange }) => (
    <Form.Field required={required ?? false}>
        <label>{topLabel}:</label>
        <Input
            type="number"
            required={required}
            placeholder={topLabel}
            value={value ?? 0}
            onChange={onChange}
            precession={precession ?? 0}
            min={min ?? 0}
            max={max}
            fluid
        />
    </Form.Field>
)

export default NumberInput
