import React from 'react'
import { Route } from 'react-router'
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

interface IRoutesProps {
    isAuthorized: boolean
}

const NotAuthorizedRoutes = () => (
    <>
        <Route path={Path.home} exact component={Home} />
        <Route path={Path.about} component={About} />
        <Route path={Path.careers} component={Careers} />
    </>
)

const AuthorizedRoutes = () => (
    <>
        <Route path={Path.dashboard} exact component={Dashboard} />
        <Route path={Path.account} component={Account} />
        <Route path={Path.calendar} component={Calendar} />
        <Route path={Path.activities} component={Activities} />
        <Route path={Path.deals} component={Deals} />
        <Route path={Path.leads} component={Leads} />
        <Route path={Path.contacts} component={Contacts} />
        <Route path={Path.products} component={Products} />
    </>
)

export const Routes = ({ isAuthorized }: IRoutesProps) =>
    isAuthorized ? <AuthorizedRoutes /> : <NotAuthorizedRoutes />
