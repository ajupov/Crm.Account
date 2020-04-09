import React, { FC } from 'react'

import BackLink from '../BackLink/BackLink'
import { Button } from 'semantic-ui-react'

export interface CreateProps {
    onClickBack: () => void
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Create: FC<CreateProps> = ({ children, onClickBack, onClickConfirm, onClickCancel }) => (
    <>
        <BackLink onClick={onClickBack} />

        {children}

        <Button.Group floated="right" style={{ marginTop: '30px' }}>
            <Button basic onClick={onClickCancel}>
                Отмена
            </Button>

            <Button onClick={onClickConfirm}>Создать</Button>
        </Button.Group>
    </>
)

export default Create
