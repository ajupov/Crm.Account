import { Button, Modal } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface RestoreProps {
    isRestoring: boolean
    title: string
    content: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Restore: FC<RestoreProps> = ({ isRestoring, title, content, onClickConfirm, onClickCancel }) => (
    <Modal size="mini" open={isRestoring} onClose={onClickCancel}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
            <Button.Group>
                <Button type="reset" basic onClick={onClickCancel}>
                    Нет
                </Button>
                <Button type="submit" onClick={onClickConfirm}>
                    Да
                </Button>
            </Button.Group>
        </Modal.Actions>
    </Modal>
)

export default Restore
