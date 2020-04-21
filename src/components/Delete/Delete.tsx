import { Button, Modal } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface DeleteProps {
    isDeleting: boolean
    title: string
    content: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

const Delete: FC<DeleteProps> = ({ isDeleting, title, content, onClickConfirm, onClickCancel }) => (
    <Modal size="mini" open={isDeleting} onClose={onClickCancel}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
            <Button.Group>
                <Button type="reset" basic onClick={onClickCancel}>
                    Нет
                </Button>
                <Button type="submit" disabled={!onClickConfirm}>
                    Да
                </Button>
            </Button.Group>
        </Modal.Actions>
    </Modal>
)

export default Delete
