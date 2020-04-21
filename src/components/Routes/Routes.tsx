import React, { FC } from 'react'
import { Route, Switch } from 'react-router'

import Activities from '../../pages/Activities/Activities'
import { Calendar } from 'react-big-calendar'
import Contacts from '../../pages/Contacts/Contacts'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Deals from '../../pages/Deals/Deals'
import Leads from '../../pages/Leads/Leads'
import NotFound from '../../pages/NotFound/NotFound'
import ProductCategories from '../../pages/Products/components/ProductCategories/ProductCategories'
import { ProductCategoriesRoutes } from '../../pages/Products/components/ProductCategories/routes/ProductCategoriesRoutes'
import ProductCategoryChanges from '../../pages/Products/components/ProductCategories/components/ProductCategoryChanges/ProductCategoryChanges'
import ProductCategoryCreate from '../../pages/Products/components/ProductCategories/components/ProductCategoryCreate/ProductCategoryCreate'
import ProductCategoryEdit from '../../pages/Products/components/ProductCategories/components/ProductCategoryEdit/ProductCategoryEdit'
import ProductCategoryView from '../../pages/Products/components/ProductCategories/components/ProductCategoryView/ProductCategoryView'
import Products from '../../pages/Products/Products'
import Settings from '../../pages/Settings/Settings'

const Routes: FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/activities" component={Activities} />
        <Route path="/leads" component={Leads} />
        <Route path="/deals" component={Deals} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/products" exact component={Products} />

        <Route path={ProductCategoriesRoutes.Index} exact component={ProductCategories} />
        <Route path={ProductCategoriesRoutes.Create} exact component={ProductCategoryCreate} />
        <Route path={`${ProductCategoriesRoutes.View}/:id`} exact component={ProductCategoryView} />
        <Route path={`${ProductCategoriesRoutes.Edit}/:id`} exact component={ProductCategoryEdit} />
        <Route path={`${ProductCategoriesRoutes.Changes}/:id`} exact component={ProductCategoryChanges} />

        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes
