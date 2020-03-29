import { Button, Card, Icon } from 'semantic-ui-react'
import React, { FC } from 'react'
import { getCreateDateTimeText, getLastChangeDateTimeText } from '../../helpers/changesTextHelper'

import Loader from '../loader/Loader'

export interface EditProps {
    isLoading: boolean
    createDate: string
    lastModifyDateTime?: string
    onClickBack: (event: React.MouseEvent) => void
    onClickConfirm: () => void
    onClickCancel: (event: React.MouseEvent) => void
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

        <a style={{ color: 'grey' }} onClick={onClickBack}>
            <Icon name="arrow left" />
            Назад
        </a>

        <Card.Meta textAlign="right">{getCreateDateTimeText(createDate)}</Card.Meta>

        <Card.Meta textAlign="right">{getLastChangeDateTimeText(lastModifyDateTime)}</Card.Meta>

        {children}

        <Button.Group floated="right">
            <Button onClick={onClickCancel}>Отмена</Button>

            <Button onClick={onClickConfirm}>Создать</Button>
        </Button.Group>
    </>
)

export default Edit
