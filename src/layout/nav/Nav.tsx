import React from 'react'
import { Button } from '../../@components/Button/Button'
import { LayoutContextConsumer, ILayoutContext } from '../Layout.context'

export const Nav = () => {
    const newFunction = ({ isAuthorized, setIsAuthorized }: ILayoutContext) => {
        const onClickLogout = () => setIsAuthorized(false)
        const onClickLogin = () => setIsAuthorized(true)
        const onClickRegister = () => setIsAuthorized(true)

        return isAuthorized ? (
            <Button text="Выйти" onClick={onClickLogout} />
        ) : (
            <>
                <Button text="Войти" onClick={onClickLogin} />
                <Button text="Зарегистрироваться" onClick={onClickRegister} />
            </>
        )
    }

    return <LayoutContextConsumer>{context => newFunction(context)}</LayoutContextConsumer>
}
