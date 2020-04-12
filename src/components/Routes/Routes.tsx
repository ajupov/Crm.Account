import React, { FC } from 'react'
import { Route, Switch } from 'react-router'

import Activities from '../../pages/activities/Activities'
import { Calendar } from 'react-big-calendar'
import Contacts from '../../pages/contacts/Contacts'
import Dashboard from '../../pages/dashboard/Dashboard'
import Deals from '../../pages/deals/Deals'
import Leads from '../../pages/leads/Leads'
import NotFound from '../../pages/notFound/NotFound'
import ProductCategories from '../../pages/Products/components/ProductCategories/ProductCategories'
import ProductCategoryCreate from '../../pages/Products/components/ProductCategories/components/ProductCategoryCreate/ProductCategoryCreate'
import ProductCategoryEdit from '../../pages/Products/components/ProductCategories/components/ProductCategoryEdit/ProductCategoryEdit'
import ProductCategoryView from '../../pages/Products/components/ProductCategories/components/ProductCategoryView/ProductCategoryView'
import Products from '../../pages/Products/components/Products/Products'
import Settings from '../../pages/settings/Settings'

const Routes: FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/activities" component={Activities} />
        <Route path="/leads" component={Leads} />
        <Route path="/deals" component={Deals} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/categories" exact component={ProductCategories} />
        <Route path="/products/categories/view/:id" exact component={ProductCategoryView} />
        <Route path="/products/categories/create" exact component={ProductCategoryCreate} />
        <Route path="/products/categories/edit/:id" exact component={ProductCategoryEdit} />
        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes
