import { Form, Checkbox as SemanticCheckbox, CheckboxProps as SemanticCheckboxProps } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface CheckboxProps {
    type: 'checkbox'
    label?: string
    checked: boolean
    onChange: (_: any, { value }: SemanticCheckboxProps) => void
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => (
    <Form.Field>
        <SemanticCheckbox label={label} checked={checked} onChange={onChange} />
    </Form.Field>
)

export default Checkbox
