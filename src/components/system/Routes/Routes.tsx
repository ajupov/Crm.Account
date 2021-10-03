import React, { FC } from 'react'
import { Route, Switch } from 'react-router'

import Tasks from '../../../pages/Tasks/Tasks'
import Calendar from '../../../pages/Calendar/Calendar'
import Companies from '../../../pages/Customers/components/Companies/Companies'
import CompaniesRoutes from '../../../pages/Customers/components/Companies/routes/CompaniesRoutes'
import CompanyAttributeChanges from '../../../pages/Customers/components/CompanyAttributes/components/CompanyAttributeChanges/CompanyAttributeChanges'
import CompanyAttributeCreate from '../../../pages/Customers/components/CompanyAttributes/components/CompanyAttributeCreate/CompanyAttributeCreate'
import CompanyAttributeEdit from '../../../pages/Customers/components/CompanyAttributes/components/CompanyAttributeEdit/CompanyAttributeEdit'
import CompanyAttributeView from '../../../pages/Customers/components/CompanyAttributes/components/CompanyAttributeView/CompanyAttributeView'
import CompanyAttributes from '../../../pages/Customers/components/CompanyAttributes/CompanyAttributes'
import CompanyAttributesRoutes from '../../../pages/Customers/components/CompanyAttributes/routes/CompanyAttributesRoutes'
import CompanyChanges from '../../../pages/Customers/components/Companies/components/CompanyChanges/CompanyChanges'
import CompanyCreate from '../../../pages/Customers/components/Companies/components/CompanyCreate/CompanyCreate'
import CompanyEdit from '../../../pages/Customers/components/Companies/components/CompanyEdit/CompanyEdit'
import CompanyView from '../../../pages/Customers/components/Companies/components/CompanyView/CompanyView'
import ContactAttributeChanges from '../../../pages/Customers/components/ContactAttributes/components/ContactAttributeChanges/ContactAttributeChanges'
import ContactAttributeCreate from '../../../pages/Customers/components/ContactAttributes/components/ContactAttributeCreate/ContactAttributeCreate'
import ContactAttributeEdit from '../../../pages/Customers/components/ContactAttributes/components/ContactAttributeEdit/ContactAttributeEdit'
import ContactAttributeView from '../../../pages/Customers/components/ContactAttributes/components/ContactAttributeView/ContactAttributeView'
import ContactAttributes from '../../../pages/Customers/components/ContactAttributes/ContactAttributes'
import ContactAttributesRoutes from '../../../pages/Customers/components/ContactAttributes/routes/ContactAttributesRoutes'
import ContactChanges from '../../../pages/Customers/components/Contacts/components/ContactChanges/ContactChanges'
import ContactCreate from '../../../pages/Customers/components/Contacts/components/ContactCreate/ContactCreate'
import ContactEdit from '../../../pages/Customers/components/Contacts/components/ContactEdit/ContactEdit'
import ContactView from '../../../pages/Customers/components/Contacts/components/ContactView/ContactView'
import Contacts from '../../../pages/Customers/components/Contacts/Contacts'
import ContactsRoutes from '../../../pages/Customers/components/Contacts/routes/ContactsRoutes'
import Dashboard from '../../../pages/Dashboard/Dashboard'
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
import CustomerAttributeChanges from '../../../pages/Customers/components/CustomerAttributes/components/CustomerAttributeChanges/CustomerAttributeChanges'
import CustomerAttributeCreate from '../../../pages/Customers/components/CustomerAttributes/components/CustomerAttributeCreate/CustomerAttributeCreate'
import CustomerAttributeEdit from '../../../pages/Customers/components/CustomerAttributes/components/CustomerAttributeEdit/CustomerAttributeEdit'
import CustomerAttributeView from '../../../pages/Customers/components/CustomerAttributes/components/CustomerAttributeView/CustomerAttributeView'
import CustomerAttributes from '../../../pages/Customers/components/CustomerAttributes/CustomerAttributes'
import CustomerAttributesRoutes from '../../../pages/Customers/components/CustomerAttributes/routes/CustomerAttributesRoutes'
import CustomerChanges from '../../../pages/Customers/components/Customers/components/CustomerChanges/CustomerChanges'
import CustomerCreate from '../../../pages/Customers/components/Customers/components/CustomerCreate/CustomerCreate'
import CustomerEdit from '../../../pages/Customers/components/Customers/components/CustomerEdit/CustomerEdit'
import CustomerSourceChanges from '../../../pages/Customers/components/CustomerSources/components/CustomerSourceChanges/CustomerSourceChanges'
import CustomerSourceCreate from '../../../pages/Customers/components/CustomerSources/components/CustomerSourceCreate/CustomerSourceCreate'
import CustomerSourceEdit from '../../../pages/Customers/components/CustomerSources/components/CustomerSourceEdit/CustomerSourceEdit'
import CustomerSourceView from '../../../pages/Customers/components/CustomerSources/components/CustomerSourceView/CustomerSourceView'
import CustomerSources from '../../../pages/Customers/components/CustomerSources/CustomerSources'
import CustomerSourcesRoutes from '../../../pages/Customers/components/CustomerSources/routes/CustomerSourcesRoutes'
import CustomerView from '../../../pages/Customers/components/Customers/components/CustomerView/CustomerView'
import Customers from '../../../pages/Customers/components/Customers/Customers'
import CustomersRoutes from '../../../pages/Customers/components/Customers/routes/CustomersRoutes'
import NotFound from '../../../pages/NotFound/NotFound'
import ProductAttributeChanges from '../../../pages/Products/components/ProductAttributes/components/ProductAttributeChanges/ProductAttributeChanges'
import ProductAttributeCreate from '../../../pages/Products/components/ProductAttributes/components/ProductAttributeCreate/ProductAttributeCreate'
import ProductAttributeEdit from '../../../pages/Products/components/ProductAttributes/components/ProductAttributeEdit/ProductAttributeEdit'
import ProductAttributeView from '../../../pages/Products/components/ProductAttributes/components/ProductAttributeView/ProductAttributeView'
import ProductAttributes from '../../../pages/Products/components/ProductAttributes/ProductAttributes'
import ProductAttributesRoutes from '../../../pages/Products/components/ProductAttributes/routes/ProductAttributesRoutes'
import ProductCategories from '../../../pages/Products/components/ProductCategories/ProductCategories'
import ProductCategoriesRoutes from '../../../pages/Products/components/ProductCategories/routes/ProductCategoriesRoutes'
import ProductCategoryChanges from '../../../pages/Products/components/ProductCategories/components/ProductCategoryChanges/ProductCategoryChanges'
import ProductCategoryCreate from '../../../pages/Products/components/ProductCategories/components/ProductCategoryCreate/ProductCategoryCreate'
import ProductCategoryEdit from '../../../pages/Products/components/ProductCategories/components/ProductCategoryEdit/ProductCategoryEdit'
import ProductCategoryView from '../../../pages/Products/components/ProductCategories/components/ProductCategoryView/ProductCategoryView'
import ProductChanges from '../../../pages/Products/components/Products/components/ProductChanges/ProductChanges'
import ProductCreate from '../../../pages/Products/components/Products/components/ProductCreate/ProductCreate'
import ProductEdit from '../../../pages/Products/components/Products/components/ProductEdit/ProductEdit'
import ProductStatusChanges from '../../../pages/Products/components/ProductStatuses/components/ProductStatusChanges/ProductStatusChanges'
import ProductStatusCreate from '../../../pages/Products/components/ProductStatuses/components/ProductStatusCreate/ProductStatusCreate'
import ProductStatusEdit from '../../../pages/Products/components/ProductStatuses/components/ProductStatusEdit/ProductStatusEdit'
import ProductStatusView from '../../../pages/Products/components/ProductStatuses/components/ProductStatusView/ProductStatusView'
import ProductStatuses from '../../../pages/Products/components/ProductStatuses/ProductStatuses'
import ProductStatusesRoutes from '../../../pages/Products/components/ProductStatuses/routes/ProductStatusesRoutes'
import ProductView from '../../../pages/Products/components/Products/components/ProductView/ProductView'
import Products from '../../../pages/Products/components/Products/Products'
import ProductsRoutes from '../../../pages/Products/components/Products/routes/ProductsRoutes'
import Settings from '../../../pages/Settings/Settings'

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

            <Route path={ContactsRoutes.Index} exact component={Contacts} />
            <Route path={ContactsRoutes.Create} exact component={ContactCreate} />
            <Route path={withId(ContactsRoutes.View)} exact component={ContactView} />
            <Route path={withId(ContactsRoutes.Edit)} exact component={ContactEdit} />
            <Route path={withId(ContactsRoutes.Changes)} exact component={ContactChanges} />

            <Route path={ContactAttributesRoutes.Index} exact component={ContactAttributes} />
            <Route path={ContactAttributesRoutes.Create} exact component={ContactAttributeCreate} />
            <Route path={withId(ContactAttributesRoutes.View)} exact component={ContactAttributeView} />
            <Route path={withId(ContactAttributesRoutes.Edit)} exact component={ContactAttributeEdit} />
            <Route path={withId(ContactAttributesRoutes.Changes)} exact component={ContactAttributeChanges} />

            {/*  */}

            <Route path={CompaniesRoutes.Index} exact component={Companies} />
            <Route path={CompaniesRoutes.Create} exact component={CompanyCreate} />
            <Route path={withId(CompaniesRoutes.View)} exact component={CompanyView} />
            <Route path={withId(CompaniesRoutes.Edit)} exact component={CompanyEdit} />
            <Route path={withId(CompaniesRoutes.Changes)} exact component={CompanyChanges} />

            <Route path={CompanyAttributesRoutes.Index} exact component={CompanyAttributes} />
            <Route path={CompanyAttributesRoutes.Create} exact component={CompanyAttributeCreate} />
            <Route path={withId(CompanyAttributesRoutes.View)} exact component={CompanyAttributeView} />
            <Route path={withId(CompanyAttributesRoutes.Edit)} exact component={CompanyAttributeEdit} />
            <Route path={withId(CompanyAttributesRoutes.Changes)} exact component={CompanyAttributeChanges} />

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
