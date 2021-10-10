import { Button, Modal } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface DeleteModalProps {
    isDeleting: boolean
    title: string
    content: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const DeleteModal: FC<DeleteModalProps> = ({ isDeleting, title, content, onClickConfirm, onClickCancel }) => (
    <Modal size="mini" open={isDeleting} onClose={onClickCancel}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
            <Button.Group>
                <Button type="reset" onClick={onClickCancel}>
                    Нет
                </Button>
                <Button type="submit" basic onClick={onClickConfirm}>
                    Да
                </Button>
            </Button.Group>
        </Modal.Actions>
    </Modal>
)

export default DeleteModal
