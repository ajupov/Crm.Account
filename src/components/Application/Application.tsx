import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { FC } from 'react'

export const Application: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sitemap" component={SiteMap} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/plans" component={Plans} />
            <Route path="/api" component={Api} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
