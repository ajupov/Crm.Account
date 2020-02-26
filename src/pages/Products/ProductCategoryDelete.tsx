import { Button, Modal } from 'semantic-ui-react'
import React, { FC } from 'react'

interface ProductCategoryDeleteProps {
    isOpen: boolean
    onClose: () => void
    onDelete: () => void
}

const ProductCategoryDelete: FC<ProductCategoryDeleteProps> = ({ isOpen, onClose, onDelete }) => (
    <Modal size="mini" open={isOpen} onClose={onClose}>
        <Modal.Header>Удаление категории</Modal.Header>
        <Modal.Content>
            <p>Вы уверены, что хотите удалить категорию?</p>
        </Modal.Content>
        <Modal.Actions>
            <Button.Group>
                <Button basic>Нет</Button>
                <Button onClick={onDelete}>Да</Button>
            </Button.Group>
        </Modal.Actions>
    </Modal>
)

export default ProductCategoryDelete
