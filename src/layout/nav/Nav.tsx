import React, { useState, useCallback } from 'react'
import { Button } from 'semantic-ui-react'
import { LayoutContextConsumer, ILayoutContext } from '../Layout.context'
import { LoginModal } from './LoginModal'
import { RegistrationModal } from './RegistrationModal'

export const Nav = () => {
    const [isLoginModalVisible, setLoginModalVisible] = useState(false)
    const [isRegistrationModalVisible, setRegistrationModalVisible] = useState(false)

    const onClickShowLoginModal = useCallback(() => setLoginModalVisible(true), [isLoginModalVisible])
    const onCloseLoginModal = useCallback(() => setLoginModalVisible(false), [isLoginModalVisible])

    const onClickShowRegistrationModal = useCallback(() => setRegistrationModalVisible(true), [
        isRegistrationModalVisible
    ])
    const onCloseRegistrationModal = useCallback(() => setRegistrationModalVisible(false), [isRegistrationModalVisible])

    const newFunction = ({ isAuthorized, setIsAuthorized }: ILayoutContext) => {
        const onClickLogout = () => setIsAuthorized(false)
        const onClickLogin = () => setIsAuthorized(true)
        const onClickRegister = () => setIsAuthorized(true)

        return isAuthorized ? (
            <Button basic>Выйти</Button>
        ) : (
            <>
                <Button basic onClick={onClickShowLoginModal} content="Войти" />
                <LoginModal isVisible={isLoginModalVisible} onClose={onCloseLoginModal} />

                <Button basic onClick={onClickShowRegistrationModal} content="Зарегистрироваться" />
                <RegistrationModal isVisible={isRegistrationModalVisible} onClose={onCloseRegistrationModal} />
            </>
        )
    }

    return <LayoutContextConsumer>{context => newFunction(context)}</LayoutContextConsumer>
}
