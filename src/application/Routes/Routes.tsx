import React from 'react'
import { Route, Switch } from 'react-router'
import { Path } from '../../enums/Path'
import { Home } from '../../pages/Home/Home'
import { About } from '../../pages/About/About'
import { Dashboard } from '../../pages/Dashboard/Dashboard'
import { Account } from '../../pages/Account/Account'
import { Calendar } from '../../pages/Calendar/Calendar'
import { Activities } from '../../pages/Activities/Activities'
import { Deals } from '../../pages/Deals/Deals'
import { Leads } from '../../pages/Leads/Leads'
import { Contacts } from '../../pages/Сontacts/Сontacts'
import { Products } from '../../pages/Products/Products'
import { Careers } from '../../pages/Careers/Careers'
import { NotFound } from '../../pages/NotFound/NotFound'
import { Settings } from '../../pages/Settings/Settings'

interface IRoutesProps {
    isAuthorized: boolean
}

export const NotAuthorizedRoutes = () => (
    <Switch>
        <Route path={Path.home} exact component={Home} />
        <Route path={Path.about} component={About} />
        <Route path={Path.careers} component={Careers} />
        <Route component={NotFound} />
    </Switch>
)

const AuthorizedRoutes = () => (
    <Switch>
        <Route path={Path.dashboard} exact component={Dashboard} />
        <Route path={Path.account} component={Account} />
        <Route path={Path.calendar} component={Calendar} />
        <Route path={Path.activities} component={Activities} />
        <Route path={Path.deals} component={Deals} />
        <Route path={Path.leads} component={Leads} />
        <Route path={Path.contacts} component={Contacts} />
        <Route path={Path.products} component={Products} />
        <Route path={Path.settings} component={Settings} />
        <Route component={NotFound} />
    </Switch>
)

export const Routes = ({ isAuthorized }: IRoutesProps) =>
    isAuthorized ? <AuthorizedRoutes /> : <NotAuthorizedRoutes />
