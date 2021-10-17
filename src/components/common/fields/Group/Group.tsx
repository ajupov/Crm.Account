import { Form, SemanticWIDTHS } from 'semantic-ui-react'
import FormField, { FormFieldProps } from '../../forms/FormField'
import React, { FC } from 'react'

export interface GroupProps {
    type: 'group'
    label?: string
    required?: boolean
    width?: SemanticWIDTHS
    fields?: FormFieldProps[]
}

const Group: FC<GroupProps> = ({ label, width, fields }) => (
    <Form.Field>
        {label && <label>{label}:</label>}
        <Form.Group widths={width ?? 'equal'} key={label} required={label}>
            {fields?.map(x => (
                <FormField key={x?.label} {...x} />
            ))}
        </Form.Group>
    </Form.Field>
)

export default Group
