import AttributeLinks, {
    AttributeLinksItemProps,
    AttributeLinksOptionProps
} from '../../collections/AttributeLinks/AttributeLinks'
import { Form, SemanticWIDTHS } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface AttributesLinksGroupProps {
    type: 'attributes'
    required?: boolean
    label?: string
    width?: SemanticWIDTHS
    options: AttributeLinksOptionProps[]
    items?: AttributeLinksItemProps[]
    onClickAddItem: () => void
}

const AttributeLinksGroup: FC<AttributesLinksGroupProps> = ({ required, label, options, items, onClickAddItem }) => (
    <Form.Field required={required}>
        <label>{label}:</label>
        <AttributeLinks options={options} items={items ?? []} onClickAddItem={onClickAddItem} />
    </Form.Field>
)

export default AttributeLinksGroup
