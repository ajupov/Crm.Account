import React from 'react'
import { Button } from 'semantic-ui-react'
import { LayoutContextConsumer, ILayoutContext } from '../Layout.context'

export const Nav = () => {
    const newFunction = ({ isAuthorized, setIsAuthorized }: ILayoutContext) => {
        const onClickLogout = () => setIsAuthorized(false)
        const onClickLogin = () => setIsAuthorized(true)
        const onClickRegister = () => setIsAuthorized(true)

        return isAuthorized ? (
            <Button basic onClick={onClickLogout}>Выйти</Button>
        ) : (
            <>
                <Button basic onClick={onClickLogin}>Войти</Button>
                <Button basic onClick={onClickRegister}>Зарегистрироваться</Button>
            </>
        )
    }

    return <LayoutContextConsumer>{context => newFunction(context)}</LayoutContextConsumer>
}
