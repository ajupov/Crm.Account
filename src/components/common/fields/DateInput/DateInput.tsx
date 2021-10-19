import { Form, Input, InputOnChangeData, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

import { toIsoDate } from '../../../../utils/dateTime/dateTimeUtils'

export interface DateInputProps {
    type: 'date'
    required?: boolean
    label?: string
    value?: string
    index?: number
    width?: SemanticWIDTHS
    onChange: (_: any, data: InputOnChangeData) => void
}

const DateInput: FC<DateInputProps> = ({ required, label, index, value, onChange }) => {
    const _onChange = useCallback(
        () => (event: React.FormEvent<HTMLInputElement>, data: InputOnChangeData) => {
            onChange(index, data)

            event.stopPropagation()
            event.preventDefault()
        },
        [index, onChange]
    )

    return (
        <Form.Field required={required ?? false}>
            <label>{label}:</label>
            <Input
                type="date"
                required={required}
                placeholder={label}
                value={toIsoDate(value)}
                onChange={_onChange()}
                fluid
            />
        </Form.Field>
    )
}

export default DateInput
