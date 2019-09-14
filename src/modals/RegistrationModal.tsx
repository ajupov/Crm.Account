import React from 'react'
import { Modal, Button, Form, Icon } from 'semantic-ui-react'

interface IRegistrtrationModalProps {
    isVisible: boolean
    onClose: () => void
}

export const RegistrationModal = ({ isVisible, onClose }: IRegistrtrationModalProps) => {
    return (
        <Modal size="mini" open={isVisible} onClose={onClose}>
            <Modal.Header>Регистрация личного кабинета</Modal.Header>
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
                    <Form.Input
                        fluid
                        type="password"
                        label="Повтор пароля"
                        icon="lock"
                        iconPosition="left"
                        placeholder="Повтор пароля"
                    />
                    <Button fluid content="Зарегистрироваться" primary />
                </Form>
            </Modal.Content>
        </Modal>
    )
}
