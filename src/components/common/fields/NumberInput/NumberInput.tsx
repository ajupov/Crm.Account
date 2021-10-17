import { Form, Input, InputOnChangeData, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface NumberInputProps {
    type: 'number'
    required?: boolean
    label?: string
    value?: number
    index?: number
    precession?: number
    min?: number
    max?: number
    width?: SemanticWIDTHS
    onChange?: (_: any, data: InputOnChangeData) => void
}

const NumberInput: FC<NumberInputProps> = ({ required, label, index, value, precession, min, max, onChange }) => {
    const _onChange = useCallback(
        () => (event: React.SyntheticEvent, data: InputOnChangeData) => {
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
                type="number"
                required={required}
                placeholder={label}
                value={value ?? 0}
                onChange={_onChange()}
                precession={precession ?? 0}
                min={min ?? 0}
                max={max}
                fluid
            />
        </Form.Field>
    )
}

export default NumberInput
