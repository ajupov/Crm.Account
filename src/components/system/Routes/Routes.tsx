import React, { FC } from 'react'
import { Route, Switch } from 'react-router'

import Calendar from '../../../pages/Calendar/Calendar'
import CustomerAttributeChanges from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeChanges/CustomerAttributeChanges'
import CustomerAttributeCreate from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeCreate/CustomerAttributeCreate'
import CustomerAttributeEdit from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeEdit/CustomerAttributeEdit'
import CustomerAttributeView from '../../../pages/Customers/CustomerAttributes/components/CustomerAttributeView/CustomerAttributeView'
import CustomerAttributes from '../../../pages/Customers/CustomerAttributes/CustomerAttributes'
import CustomerAttributesRoutes from '../../../pages/Customers/CustomerAttributes/routes/CustomerAttributesRoutes'
import CustomerChanges from '../../../pages/Customers/Customers/components/CustomerChanges/CustomerChanges'
import CustomerCreate from '../../../pages/Customers/Customers/components/CustomerCreate/CustomerCreate'
import CustomerEdit from '../../../pages/Customers/Customers/components/CustomerEdit/CustomerEdit'
import CustomerSourceChanges from '../../../pages/Customers/CustomerSources/components/CustomerSourceChanges/CustomerSourceChanges'
import CustomerSourceCreate from '../../../pages/Customers/CustomerSources/components/CustomerSourceCreate/CustomerSourceCreate'
import CustomerSourceEdit from '../../../pages/Customers/CustomerSources/components/CustomerSourceEdit/CustomerSourceEdit'
import CustomerSourceView from '../../../pages/Customers/CustomerSources/components/CustomerSourceView/CustomerSourceView'
import CustomerSources from '../../../pages/Customers/CustomerSources/CustomerSources'
import CustomerSourcesRoutes from '../../../pages/Customers/CustomerSources/routes/CustomerSourcesRoutes'
import CustomerView from '../../../pages/Customers/Customers/components/CustomerView/CustomerView'
import Customers from '../../../pages/Customers/Customers/Customers'
import CustomersRoutes from '../../../pages/Customers/Customers/routes/CustomersRoutes'
import Dashboard from '../../../pages/Dashboard/Dashboard'
import NotFound from '../../../pages/NotFound/NotFound'
import OrderAttributeChanges from '../../../pages/Orders/OrderAttributes/components/OrderAttributeChanges/OrderAttributeChanges'
import OrderAttributeCreate from '../../../pages/Orders/OrderAttributes/components/OrderAttributeCreate/OrderAttributeCreate'
import OrderAttributeEdit from '../../../pages/Orders/OrderAttributes/components/OrderAttributeEdit/OrderAttributeEdit'
import OrderAttributeView from '../../../pages/Orders/OrderAttributes/components/OrderAttributeView/OrderAttributeView'
import OrderAttributes from '../../../pages/Orders/OrderAttributes/OrderAttributes'
import OrderAttributesRoutes from '../../../pages/Orders/OrderAttributes/routes/OrderAttributesRoutes'
import OrderStatusChanges from '../../../pages/Orders/OrderStatuses/components/OrderStatusChanges/OrderStatusChanges'
import OrderStatusCreate from '../../../pages/Orders/OrderStatuses/components/OrderStatusCreate/OrderStatusCreate'
import OrderStatusEdit from '../../../pages/Orders/OrderStatuses/components/OrderStatusEdit/OrderStatusEdit'
import OrderStatusView from '../../../pages/Orders/OrderStatuses/components/OrderStatusView/OrderStatusView'
import OrderStatuses from '../../../pages/Orders/OrderStatuses/OrderStatuses'
import OrderStatusesRoutes from '../../../pages/Orders/OrderStatuses/routes/OrderStatusesRoutes'
import OrderTypeChanges from '../../../pages/Orders/OrderTypes/components/OrderTypeChanges/OrderTypeChanges'
import OrderTypeCreate from '../../../pages/Orders/OrderTypes/components/OrderTypeCreate/OrderTypeCreate'
import OrderTypeEdit from '../../../pages/Orders/OrderTypes/components/OrderTypeEdit/OrderTypeEdit'
import OrderTypeView from '../../../pages/Orders/OrderTypes/components/OrderTypeView/OrderTypeView'
import OrderTypes from '../../../pages/Orders/OrderTypes/OrderTypes'
import OrderTypesRoutes from '../../../pages/Orders/OrderTypes/routes/OrderTypesRoutes'
import Orders from '../../../pages/Orders/Orders/Orders'
import OrdersRoutes from '../../../pages/Orders/Orders/routes/OrdersRoutes'
import ProductAttributeChanges from '../../../pages/Products/ProductAttributes/components/ProductAttributeChanges/ProductAttributeChanges'
import ProductAttributeCreate from '../../../pages/Products/ProductAttributes/components/ProductAttributeCreate/ProductAttributeCreate'
import ProductAttributeEdit from '../../../pages/Products/ProductAttributes/components/ProductAttributeEdit/ProductAttributeEdit'
import ProductAttributeView from '../../../pages/Products/ProductAttributes/components/ProductAttributeView/ProductAttributeView'
import ProductAttributes from '../../../pages/Products/ProductAttributes/ProductAttributes'
import ProductAttributesRoutes from '../../../pages/Products/ProductAttributes/routes/ProductAttributesRoutes'
import ProductCategories from '../../../pages/Products/ProductCategories/ProductCategories'
import ProductCategoriesRoutes from '../../../pages/Products/ProductCategories/routes/ProductCategoriesRoutes'
import ProductCategoryChanges from '../../../pages/Products/ProductCategories/components/ProductCategoryChanges/ProductCategoryChanges'
import ProductCategoryCreate from '../../../pages/Products/ProductCategories/components/ProductCategoryCreate/ProductCategoryCreate'
import ProductCategoryEdit from '../../../pages/Products/ProductCategories/components/ProductCategoryEdit/ProductCategoryEdit'
import ProductCategoryView from '../../../pages/Products/ProductCategories/components/ProductCategoryView/ProductCategoryView'
import ProductChanges from '../../../pages/Products/Products/components/ProductChanges/ProductChanges'
import ProductCreate from '../../../pages/Products/Products/components/ProductCreate/ProductCreate'
import ProductEdit from '../../../pages/Products/Products/components/ProductEdit/ProductEdit'
import ProductStatusChanges from '../../../pages/Products/ProductStatuses/components/ProductStatusChanges/ProductStatusChanges'
import ProductStatusCreate from '../../../pages/Products/ProductStatuses/components/ProductStatusCreate/ProductStatusCreate'
import ProductStatusEdit from '../../../pages/Products/ProductStatuses/components/ProductStatusEdit/ProductStatusEdit'
import ProductStatusView from '../../../pages/Products/ProductStatuses/components/ProductStatusView/ProductStatusView'
import ProductStatuses from '../../../pages/Products/ProductStatuses/ProductStatuses'
import ProductStatusesRoutes from '../../../pages/Products/ProductStatuses/routes/ProductStatusesRoutes'
import ProductView from '../../../pages/Products/Products/components/ProductView/ProductView'
import Products from '../../../pages/Products/Products/Products'
import ProductsRoutes from '../../../pages/Products/Products/routes/ProductsRoutes'
import Settings from '../../../pages/Settings/Settings'
import Tasks from '../../../pages/Tasks/Tasks/Tasks'

const Routes: FC = () => {
    const withId = (route: string): string => `${route}/:id`

    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/settings" component={Settings} />

            {/*  */}

            <Route path={OrdersRoutes.Index} exact component={Orders} />
            <Route path={OrdersRoutes.Create} exact component={CustomerCreate} />
            <Route path={withId(OrdersRoutes.View)} exact component={CustomerView} />
            <Route path={withId(OrdersRoutes.Edit)} exact component={CustomerEdit} />
            <Route path={withId(OrdersRoutes.Changes)} exact component={CustomerChanges} />

            <Route path={OrderStatusesRoutes.Index} exact component={OrderStatuses} />
            <Route path={OrderStatusesRoutes.Create} exact component={OrderStatusCreate} />
            <Route path={withId(OrderStatusesRoutes.View)} exact component={OrderStatusView} />
            <Route path={withId(OrderStatusesRoutes.Edit)} exact component={OrderStatusEdit} />
            <Route path={withId(OrderStatusesRoutes.Changes)} exact component={OrderStatusChanges} />

            <Route path={OrderTypesRoutes.Index} exact component={OrderTypes} />
            <Route path={OrderTypesRoutes.Create} exact component={OrderTypeCreate} />
            <Route path={withId(OrderTypesRoutes.View)} exact component={OrderTypeView} />
            <Route path={withId(OrderTypesRoutes.Edit)} exact component={OrderTypeEdit} />
            <Route path={withId(OrderTypesRoutes.Changes)} exact component={OrderTypeChanges} />

            <Route path={OrderAttributesRoutes.Index} exact component={OrderAttributes} />
            <Route path={OrderAttributesRoutes.Create} exact component={OrderAttributeCreate} />
            <Route path={withId(OrderAttributesRoutes.View)} exact component={OrderAttributeView} />
            <Route path={withId(OrderAttributesRoutes.Edit)} exact component={OrderAttributeEdit} />
            <Route path={withId(OrderAttributesRoutes.Changes)} exact component={OrderAttributeChanges} />

            {/*  */}

            <Route path={CustomersRoutes.Index} exact component={Customers} />
            <Route path={CustomersRoutes.Create} exact component={CustomerCreate} />
            <Route path={withId(CustomersRoutes.View)} exact component={CustomerView} />
            <Route path={withId(CustomersRoutes.Edit)} exact component={CustomerEdit} />
            <Route path={withId(CustomersRoutes.Changes)} exact component={CustomerChanges} />

            <Route path={CustomerSourcesRoutes.Index} exact component={CustomerSources} />
            <Route path={CustomerSourcesRoutes.Create} exact component={CustomerSourceCreate} />
            <Route path={withId(CustomerSourcesRoutes.View)} exact component={CustomerSourceView} />
            <Route path={withId(CustomerSourcesRoutes.Edit)} exact component={CustomerSourceEdit} />
            <Route path={withId(CustomerSourcesRoutes.Changes)} exact component={CustomerSourceChanges} />

            <Route path={CustomerAttributesRoutes.Index} exact component={CustomerAttributes} />
            <Route path={CustomerAttributesRoutes.Create} exact component={CustomerAttributeCreate} />
            <Route path={withId(CustomerAttributesRoutes.View)} exact component={CustomerAttributeView} />
            <Route path={withId(CustomerAttributesRoutes.Edit)} exact component={CustomerAttributeEdit} />
            <Route path={withId(CustomerAttributesRoutes.Changes)} exact component={CustomerAttributeChanges} />

            {/*  */}

            <Route path={ProductsRoutes.Index} exact component={Products} />
            <Route path={ProductsRoutes.Create} exact component={ProductCreate} />
            <Route path={withId(ProductsRoutes.View)} exact component={ProductView} />
            <Route path={withId(ProductsRoutes.Edit)} exact component={ProductEdit} />
            <Route path={withId(ProductsRoutes.Changes)} exact component={ProductChanges} />

            <Route path={ProductCategoriesRoutes.Index} exact component={ProductCategories} />
            <Route path={ProductCategoriesRoutes.Create} exact component={ProductCategoryCreate} />
            <Route path={withId(ProductCategoriesRoutes.View)} exact component={ProductCategoryView} />
            <Route path={withId(ProductCategoriesRoutes.Edit)} exact component={ProductCategoryEdit} />
            <Route path={withId(ProductCategoriesRoutes.Changes)} exact component={ProductCategoryChanges} />

            <Route path={ProductAttributesRoutes.Index} exact component={ProductAttributes} />
            <Route path={ProductAttributesRoutes.Create} exact component={ProductAttributeCreate} />
            <Route path={withId(ProductAttributesRoutes.View)} exact component={ProductAttributeView} />
            <Route path={withId(ProductAttributesRoutes.Edit)} exact component={ProductAttributeEdit} />
            <Route path={withId(ProductAttributesRoutes.Changes)} exact component={ProductAttributeChanges} />

            <Route path={ProductStatusesRoutes.Index} exact component={ProductStatuses} />
            <Route path={ProductStatusesRoutes.Create} exact component={ProductStatusCreate} />
            <Route path={withId(ProductStatusesRoutes.View)} exact component={ProductStatusView} />
            <Route path={withId(ProductStatusesRoutes.Edit)} exact component={ProductStatusEdit} />
            <Route path={withId(ProductStatusesRoutes.Changes)} exact component={ProductStatusChanges} />

            {/*  */}

            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes
