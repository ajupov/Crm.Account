import { Button, Card, Form } from 'semantic-ui-react'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/textHelper'

import BackLink from '../BackLink/BackLink'
import Loader from '../Loader/Loader'

export interface EditProps {
    isLoading: boolean
    createDate?: string
    lastModifyDateTime?: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Edit: FC<EditProps> = ({
    children,
    isLoading,
    createDate,
    lastModifyDateTime,
    onClickConfirm,
    onClickCancel
}) => (
    <>
        <Loader isLoading={isLoading} />
        <BackLink onClick={onClickCancel} />
        <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>
        <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>
        <Form onSubmit={onClickConfirm}>
            {children}
            <Form.Field>
                <Button.Group floated="right">
                    <Button type="reset" basic onClick={onClickCancel}>
                        Отмена
                    </Button>
                    <Button type="submit">Сохранить</Button>
                </Button.Group>
            </Form.Field>
        </Form>
    </>
)

export default Edit
