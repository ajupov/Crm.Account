import { Button, Card } from 'semantic-ui-react'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/textHelper'

import BackLink from '../backLink/BackLink'
import Loader from '../loader/Loader'

export interface EditProps {
    isLoading: boolean
    createDate: string
    lastModifyDateTime?: string
    onClickBack: () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Edit: FC<EditProps> = ({
    children,
    isLoading,
    createDate,
    lastModifyDateTime,
    onClickBack,
    onClickConfirm,
    onClickCancel
}) => (
    <>
        <Loader isLoading={isLoading} />

        <BackLink onClick={onClickBack} />

        <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>

        <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>

        {children}

        <Button.Group floated="right" style={{ marginTop: '30px' }}>
            <Button basic onClick={onClickCancel}>
                Отмена
            </Button>

            <Button onClick={onClickConfirm}>Создать</Button>
        </Button.Group>
    </>
)

export default Edit
