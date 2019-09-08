import React, { useState, useCallback } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
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
// import styles from './Layout.module.less'

export const Layout = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

    const onClickLogout = useCallback(() => setIsAuthorized(false), [])
    const onClickLogin = useCallback(() => setIsAuthorized(true), [])

    const renderHeader = () => {
        return isAuthorized ? (
            <button onClick={onClickLogout}>Выйти</button>
        ) : (
            <button onClick={onClickLogin}>Войти</button>
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
            <div className={'styles.layout'}>
                {renderHeader()}
                {renderCommonRoutes()}
                {renderAuthorizedRoutes()}
            </div>
        </BrowserRouter>
    )
}
