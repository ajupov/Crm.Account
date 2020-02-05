import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { FC } from 'react'

import { Activities } from '../../pages/Activities/Activities'
import { Calendar } from '../../pages/Calendar/Calendar'
import { Contacts } from '../../pages/Сontacts/Сontacts'
import { Dashboard } from '../../pages/Dashboard/Dashboard'
import { Deals } from '../../pages/Deals/Deals'
import { Leads } from '../../pages/Leads/Leads'
import { NotFound } from '../../pages/NotFound/NotFound'
import { Products } from '../../pages/Products/Products'
import { Settings } from '../../pages/Settings/Settings'

export const Application: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/activities" component={Activities} />
            <Route path="/leads" component={Leads} />
            <Route path="/deals" component={Deals} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/products" component={Products} />
            <Route path="/settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
