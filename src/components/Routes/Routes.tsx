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
import ProductStatusChanges from '../../pages/Products/components/ProductStatuses/components/ProductStatusChanges/ProductStatusChanges'
import ProductStatusCreate from '../../pages/Products/components/ProductStatuses/components/ProductStatusCreate/ProductStatusCreate'
import ProductStatusEdit from '../../pages/Products/components/ProductStatuses/components/ProductStatusEdit/ProductStatusEdit'
import ProductStatusView from '../../pages/Products/components/ProductStatuses/components/ProductStatusView/ProductStatusView'
import ProductStatuses from '../../pages/Products/components/ProductStatuses/ProductStatuses'
import { ProductStatusesRoutes } from '../../pages/Products/components/ProductStatuses/routes/ProductStatusesRoutes'
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

        <Route path={ProductStatusesRoutes.Index} exact component={ProductStatuses} />
        <Route path={ProductStatusesRoutes.Create} exact component={ProductStatusCreate} />
        <Route path={`${ProductStatusesRoutes.View}/:id`} exact component={ProductStatusView} />
        <Route path={`${ProductStatusesRoutes.Edit}/:id`} exact component={ProductStatusEdit} />
        <Route path={`${ProductStatusesRoutes.Changes}/:id`} exact component={ProductStatusChanges} />

        <Route path="/settings" component={Settings} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes
