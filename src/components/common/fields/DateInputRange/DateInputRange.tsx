import { Form, Input, InputOnChangeData, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface DateInputRangeProps {
    type: 'date'
    required?: boolean
    label?: string
    label1?: string
    label2?: string
    value1?: string
    value2?: string
    width?: SemanticWIDTHS
    onChange1?: (_: any, data: InputOnChangeData) => void
    onChange2?: (_: any, data: InputOnChangeData) => void
}

// TODO: Move to l10n
const DateInputRange: FC<DateInputRangeProps> = ({
    required,
    label,
    label1,
    label2,
    value1,
    value2,
    onChange1,
    onChange2
}) => (
    <Form.Field required={required ?? false}>
        <label>{label}:</label>
        <Input
            type="date"
            required={required}
            placeholder={label1}
            value={value1 ?? 0}
            onChange={onChange1}
            label="с"
            fluid
        />
        <Input
            type="date"
            required={required}
            placeholder={label2}
            value={value2 ?? 0}
            onChange={onChange2}
            label="по"
            fluid
        />
    </Form.Field>
)

export default DateInputRange
