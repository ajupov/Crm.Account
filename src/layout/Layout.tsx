import React, { useState, useCallback } from 'react'
import { Route, BrowserRouter, Link } from 'react-router-dom'
import { Path } from '../enums/Path'
import { Home } from '../pages/Home/Home'
import { About } from '../pages/About/About'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Calendar } from '../pages/Calendar/Calendar'
import { Activities } from '../pages/Activities/Activities'
import { Leads } from '../pages/Leads/Leads'
import { Deals } from '../pages/Deals/Deals'
import { Contacts } from '../pages/Сontacts/Сontacts'
import { Products } from '../pages/Products/Products'
import { GlobalLayoutStyled, LayoutStyled } from './Layout.styles'
import { Button } from '../@components/Button/Button'

export const Layout = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

    const onClickLogout = useCallback(() => setIsAuthorized(false), [])
    const onClickLogin = useCallback(() => setIsAuthorized(true), [])
    const onClickRegister = useCallback(() => setIsAuthorized(true), [])

    const renderHeader = () => {
        return isAuthorized ? (
            <Button text="Выйти" onClick={onClickLogout} />
        ) : (
            <>
                <Button text="Войти" onClick={onClickLogin} />
                <Button text="Зарегистрироваться" onClick={onClickRegister} />
            </>
        )
    }

    const renderRoutes = () => {
        return (
            <>
                {renderCommonRoutes()}
                {isAuthorized && renderAuthorizedRoutes()}
            </>
        )
    }

    const renderLinks = () => {
        return (
            <>
                {renderCommonLinks()}
                {isAuthorized && renderAuthorizedLinks()}
            </>
        )
    }

    const renderCommonLinks = () => {
        return (
            <>
                <Link to={Path.home}>Главная</Link>
                <Link to={Path.about}>О нас</Link>
            </>
        )
    }

    const renderAuthorizedLinks = () => {
        return (
            <>
                <Link to={Path.dashboard}>Дашборд</Link>
                <Link to={Path.calendar}>Календарь</Link>
                <Link to={Path.activities}>Задачи</Link>
                <Link to={Path.deals}>Сделки</Link>
                <Link to={Path.leads}>Лиды</Link>
                <Link to={Path.contacts}>Контакты</Link>
                <Link to={Path.products}>Продукты</Link>
            </>
        )
    }

    const renderCommonRoutes = () => {
        return (
            <>
                <Route path={Path.home} component={Home} />
                <Route path={Path.about} component={About} />
            </>
        )
    }

    const renderAuthorizedRoutes = () => {
        return (
            <>
                <Route path={Path.dashboard} component={Dashboard} />
                <Route path={Path.calendar} component={Calendar} />
                <Route path={Path.activities} component={Activities} />
                <Route path={Path.deals} component={Deals} />
                <Route path={Path.leads} component={Leads} />
                <Route path={Path.contacts} component={Contacts} />
                <Route path={Path.products} component={Products} />
            </>
        )
    }

    return (
        <BrowserRouter>
            <GlobalLayoutStyled />
            <LayoutStyled>
                {renderHeader()}
                {renderRoutes()}
                {renderLinks()}
            </LayoutStyled>
        </BrowserRouter>
    )
}
