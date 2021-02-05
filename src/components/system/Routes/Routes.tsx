import React, { FC } from 'react'
import { Route, Switch } from 'react-router'

import Activities from '../../../pages/Activities/Activities'
import Calendar from '../../../pages/Calendar/Calendar'
import Companies from '../../../pages/Clients/components/Companies/Companies'
import CompaniesRoutes from '../../../pages/Clients/components/Companies/routes/CompaniesRoutes'
import CompanyAttributeChanges from '../../../pages/Clients/components/CompanyAttributes/components/CompanyAttributeChanges/CompanyAttributeChanges'
import CompanyAttributeCreate from '../../../pages/Clients/components/CompanyAttributes/components/CompanyAttributeCreate/CompanyAttributeCreate'
import CompanyAttributeEdit from '../../../pages/Clients/components/CompanyAttributes/components/CompanyAttributeEdit/CompanyAttributeEdit'
import CompanyAttributeView from '../../../pages/Clients/components/CompanyAttributes/components/CompanyAttributeView/CompanyAttributeView'
import CompanyAttributes from '../../../pages/Clients/components/CompanyAttributes/CompanyAttributes'
import CompanyAttributesRoutes from '../../../pages/Clients/components/CompanyAttributes/routes/CompanyAttributesRoutes'
import CompanyChanges from '../../../pages/Clients/components/Companies/components/CompanyChanges/CompanyChanges'
import CompanyCreate from '../../../pages/Clients/components/Companies/components/CompanyCreate/CompanyCreate'
import CompanyEdit from '../../../pages/Clients/components/Companies/components/CompanyEdit/CompanyEdit'
import CompanyView from '../../../pages/Clients/components/Companies/components/CompanyView/CompanyView'
import ContactAttributeChanges from '../../../pages/Clients/components/ContactAttributes/components/ContactAttributeChanges/ContactAttributeChanges'
import ContactAttributeCreate from '../../../pages/Clients/components/ContactAttributes/components/ContactAttributeCreate/ContactAttributeCreate'
import ContactAttributeEdit from '../../../pages/Clients/components/ContactAttributes/components/ContactAttributeEdit/ContactAttributeEdit'
import ContactAttributeView from '../../../pages/Clients/components/ContactAttributes/components/ContactAttributeView/ContactAttributeView'
import ContactAttributes from '../../../pages/Clients/components/ContactAttributes/ContactAttributes'
import ContactAttributesRoutes from '../../../pages/Clients/components/ContactAttributes/routes/ContactAttributesRoutes'
import ContactChanges from '../../../pages/Clients/components/Contacts/components/ContactChanges/ContactChanges'
import ContactCreate from '../../../pages/Clients/components/Contacts/components/ContactCreate/ContactCreate'
import ContactEdit from '../../../pages/Clients/components/Contacts/components/ContactEdit/ContactEdit'
import ContactView from '../../../pages/Clients/components/Contacts/components/ContactView/ContactView'
import Contacts from '../../../pages/Clients/components/Contacts/Contacts'
import ContactsRoutes from '../../../pages/Clients/components/Contacts/routes/ContactsRoutes'
import Dashboard from '../../../pages/Dashboard/Dashboard'
import Deals from '../../../pages/Deals/Deals'
import LeadAttributeChanges from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeChanges/LeadAttributeChanges'
import LeadAttributeCreate from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeCreate/LeadAttributeCreate'
import LeadAttributeEdit from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeEdit/LeadAttributeEdit'
import LeadAttributeView from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeView/LeadAttributeView'
import LeadAttributes from '../../../pages/Leads/components/LeadsAttributes/LeadAttributes'
import LeadAttributesRoutes from '../../../pages/Leads/components/LeadsAttributes/routes/LeadAttributesRoutes'
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
            <Route path="/activities" component={Activities} />
            <Route path="/deals" component={Deals} />
            <Route path="/settings" component={Settings} />

            {/*  */}

            <Route path={LeadAttributesRoutes.Index} exact component={LeadAttributes} />
            <Route path={LeadAttributesRoutes.Create} exact component={LeadAttributeCreate} />
            <Route path={withId(LeadAttributesRoutes.View)} exact component={LeadAttributeView} />
            <Route path={withId(LeadAttributesRoutes.Edit)} exact component={LeadAttributeEdit} />
            <Route path={withId(LeadAttributesRoutes.Changes)} exact component={LeadAttributeChanges} />

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
