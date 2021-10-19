import {
    Form,
    Checkbox as SemanticCheckbox,
    CheckboxProps as SemanticCheckboxProps,
    SemanticWIDTHS
} from 'semantic-ui-react'
import React, { FC, useCallback } from 'react'

export interface CheckboxProps {
    type: 'checkbox'
    required?: boolean
    label?: string
    index?: number
    checked: boolean
    width?: SemanticWIDTHS
    onChange: (_: any, data: SemanticCheckboxProps) => void
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, index, onChange }) => {
    const _onChange = useCallback(
        () => (event: React.FormEvent<HTMLInputElement>, data: SemanticCheckboxProps) => {
            onChange(index, data)

            event.stopPropagation()
            event.preventDefault()
        },
        [index, onChange]
    )

    return (
        <Form.Field>
            <SemanticCheckbox label={label} checked={checked} onChange={_onChange()} />
        </Form.Field>
    )
}

export default Checkbox
