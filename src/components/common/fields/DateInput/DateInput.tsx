import { Form, Input, InputOnChangeData, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC } from 'react'

import { toIsoDate } from '../../../../utils/dateTime/dateTimeUtils'

export interface DateInputProps {
    type: 'date'
    required?: boolean
    label?: string
    value?: string
    width?: SemanticWIDTHS
    onChange: (_: any, data: InputOnChangeData) => void
}

const DateInput: FC<DateInputProps> = ({ required, label, value, onChange }) => (
    <Form.Field required={required ?? false}>
        <label>{label}:</label>
        <Input type="date" required={required} placeholder={label} value={toIsoDate(value)} onChange={onChange} fluid />
    </Form.Field>
)

export default DateInput
