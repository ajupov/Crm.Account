import {
    Form,
    Checkbox as SemanticCheckbox,
    CheckboxProps as SemanticCheckboxProps,
    SemanticWIDTHS
} from 'semantic-ui-react'
import React, { FC } from 'react'

export interface CheckboxProps {
    type: 'checkbox'
    required?: boolean
    label?: string
    checked: boolean
    width?: SemanticWIDTHS
    onChange: (_: any, data: SemanticCheckboxProps) => void
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => (
    <Form.Field>
        <SemanticCheckbox label={label} checked={checked} onChange={onChange} />
    </Form.Field>
)

export default Checkbox
