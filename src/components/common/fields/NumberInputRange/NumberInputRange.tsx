import { Form, Input, InputOnChangeData } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface NumberInputRangeProps {
    type: 'number'
    required?: boolean
    topLabel?: string
    label1?: string
    label2?: string
    value1?: number
    value2?: number
    precession?: number
    min?: number
    max?: number
    onChange1?: (_: any, data: InputOnChangeData) => void
    onChange2?: (_: any, data: InputOnChangeData) => void
}

const MaxIntValue = 2147483647

// TODO: Move to l10n
const NumberInputRange: FC<NumberInputRangeProps> = ({
    required,
    topLabel,
    label1,
    label2,
    value1,
    value2,
    precession,
    min,
    max,
    onChange1,
    onChange2
}) => (
    <Form.Field required={required ?? false}>
        <label>{topLabel}:</label>
        <Input
            type="number"
            required={required}
            placeholder={label1}
            value={value1 ?? ''}
            onChange={onChange1}
            precession={precession ?? 0}
            min={min ?? 0}
            max={max ?? MaxIntValue}
            label="от"
            fluid
        />
        <Input
            type="number"
            required={required}
            placeholder={label2}
            value={value2 ?? ''}
            onChange={onChange2}
            precession={precession ?? 0}
            min={min ?? 0}
            max={max ?? MaxIntValue}
            label="до"
            fluid
        />
    </Form.Field>
)

export default NumberInputRange
