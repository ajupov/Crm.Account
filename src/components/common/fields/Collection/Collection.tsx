import { Button, Form, Icon, SemanticWIDTHS } from 'semantic-ui-react'
import FormField, { FormFieldProps } from '../../forms/FormField'
import React, { FC, useCallback } from 'react'

export interface CollectionProps {
    type: 'collection'
    label?: string
    required?: boolean
    width?: SemanticWIDTHS
    fields?: FormFieldProps[][]
    onClickAddItem: () => void
}

const Collection: FC<CollectionProps> = ({ required, label, fields, width, onClickAddItem }) => {
    const _onClickAddItem = useCallback(
        (event: React.MouseEvent) => {
            onClickAddItem()

            event.stopPropagation()
            event.preventDefault()
        },
        [onClickAddItem]
    )

    return (
        <Form.Field>
            {label && <label>{label}:</label>}
            <Form.Group widths={width ?? 'equal'} key={label} required={required}>
                {fields?.map(x => x.map(y => <FormField key={y.label} {...y} />))}
            </Form.Group>
            <Button basic compact size="mini" onClick={_onClickAddItem}>
                <Icon name="add" />
                Добавить
            </Button>
        </Form.Field>
    )
}

export default Collection
