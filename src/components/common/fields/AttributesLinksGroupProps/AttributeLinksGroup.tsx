import AttributeLinks, {
    AttributeLinksItemProps,
    AttributeLinksOptionProps
} from '../../collections/AttributeLinks/AttributeLinks'
import React, { FC } from 'react'

import { Form } from 'semantic-ui-react'

export interface AttributesLinksGroupProps {
    type: 'attributes'
    required?: boolean
    label?: string
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
