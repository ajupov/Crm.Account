import { Button, Modal } from 'semantic-ui-react'
import React, { FC } from 'react'

export interface RestoreModalProps {
    isRestoring: boolean
    title: string
    content: string
    onClickConfirm: () => void
    onClickCancel: () => void
}

// TODO: Move to l10n
const RestoreModal: FC<RestoreModalProps> = ({ isRestoring, title, content, onClickConfirm, onClickCancel }) => (
    <Modal size="mini" open={isRestoring} onClose={onClickCancel}>
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

export default RestoreModal
