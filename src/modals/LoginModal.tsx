import React from 'react'
import { Modal, Button, Form, Icon } from 'semantic-ui-react'

interface ILoginModalProps {
    isVisible: boolean
    onClose: () => void
}

export const LoginModal = ({ isVisible, onClose }: ILoginModalProps) => {
    return (
        <Modal size="mini" open={isVisible} onClose={onClose}>
            <Modal.Header>Вход в личный кабинет</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input fluid icon="user" iconPosition="left" label="Логин" placeholder="Логин" />
                    <Form.Input
                        fluid
                        type="password"
                        label="Пароль"
                        icon="lock"
                        iconPosition="left"
                        placeholder="Пароль"
                    />
                    <Button fluid content="Войти" primary />
                </Form>
                <Icon name="heart" color="red" />
            </Modal.Content>
        </Modal>
    )
}
