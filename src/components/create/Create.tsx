import { Button, Icon } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface CreateProps {
    onClickBack: (event: React.MouseEvent) => void
    onClickConfirm: () => void
    onClickCancel: (event: React.MouseEvent) => void
}

const Create: FC<CreateProps> = ({ children, onClickBack, onClickConfirm, onClickCancel }) => (
    <>
        <a style={{ color: 'grey' }} onClick={onClickBack}>
            <Icon name="arrow left" />
            Назад
        </a>

        {children}

        <Button.Group floated="right">
            <Button onClick={onClickCancel}>Отмена</Button>

            <Button onClick={onClickConfirm}>Создать</Button>
        </Button.Group>
    </>
)

export default Create
