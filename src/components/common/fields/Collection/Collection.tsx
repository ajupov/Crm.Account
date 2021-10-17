import { Button, Form, Icon, SemanticWIDTHS } from 'semantic-ui-react'
import FormField, { FormFieldProps } from '../../forms/FormField'
import React, { FC, useCallback } from 'react'

import IconLink from '../../links/IconLink/IconLink'

export interface CollectionProps {
    type: 'collection'
    label?: string
    required?: boolean
    width?: SemanticWIDTHS
    fields?: FormFieldProps[][]
    onClickAdd: () => void
    onClickDelete: (index: number) => void
}

const Collection: FC<CollectionProps> = ({ label, fields, onClickAdd, onClickDelete }) => {
    const _onClickAdd = useCallback(
        (event: React.MouseEvent) => {
            onClickAdd()

            event.stopPropagation()
            event.preventDefault()
        },
        [onClickAdd]
    )

    const _onClickDelete = useCallback(
        (index: number) => (event: React.MouseEvent) => {
            onClickDelete(index)

            event.stopPropagation()
            event.preventDefault()
        },
        [onClickDelete]
    )

    return (
        <>
            {label && <label>{label}:</label>}
            {fields?.map((x, i) => (
                <Form.Group key={i} style={{ marginBottom: '1rem' }}>
                    <Form.Field key={i}>
                        <IconLink name="remove" onClick={_onClickDelete(i)} />
                    </Form.Field>
                    {x.map((y, j) => (
                        <FormField key={j} {...y} />
                    ))}
                </Form.Group>
            ))}
            <Button basic compact size="mini" onClick={_onClickAdd}>
                <Icon name="add" />
                Добавить
            </Button>
        </>
    )
}

export default Collection
