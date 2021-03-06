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
import DealAttributeChanges from '../../../pages/Deals/DealAttributes/components/DealAttributeChanges/DealAttributeChanges'
import DealAttributeCreate from '../../../pages/Deals/DealAttributes/components/DealAttributeCreate/DealAttributeCreate'
import DealAttributeEdit from '../../../pages/Deals/DealAttributes/components/DealAttributeEdit/DealAttributeEdit'
import DealAttributeView from '../../../pages/Deals/DealAttributes/components/DealAttributeView/DealAttributeView'
import DealAttributes from '../../../pages/Deals/DealAttributes/DealAttributes'
import DealAttributesRoutes from '../../../pages/Deals/DealAttributes/routes/DealAttributesRoutes'
import DealStatusChanges from '../../../pages/Deals/DealStatuses/components/DealStatusChanges/DealStatusChanges'
import DealStatusCreate from '../../../pages/Deals/DealStatuses/components/DealStatusCreate/DealStatusCreate'
import DealStatusEdit from '../../../pages/Deals/DealStatuses/components/DealStatusEdit/DealStatusEdit'
import DealStatusView from '../../../pages/Deals/DealStatuses/components/DealStatusView/DealStatusView'
import DealStatuses from '../../../pages/Deals/DealStatuses/DealStatuses'
import DealStatusesRoutes from '../../../pages/Deals/DealStatuses/routes/DealStatusesRoutes'
import DealTypeChanges from '../../../pages/Deals/DealTypes/components/DealTypeChanges/DealTypeChanges'
import DealTypeCreate from '../../../pages/Deals/DealTypes/components/DealTypeCreate/DealTypeCreate'
import DealTypeEdit from '../../../pages/Deals/DealTypes/components/DealTypeEdit/DealTypeEdit'
import DealTypeView from '../../../pages/Deals/DealTypes/components/DealTypeView/DealTypeView'
import DealTypes from '../../../pages/Deals/DealTypes/DealTypes'
import DealTypesRoutes from '../../../pages/Deals/DealTypes/routes/DealTypesRoutes'
import Deals from '../../../pages/Deals/Deals/Deals'
import DealsRoutes from '../../../pages/Deals/Deals/routes/DealsRoutes'
import LeadAttributeChanges from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeChanges/LeadAttributeChanges'
import LeadAttributeCreate from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeCreate/LeadAttributeCreate'
import LeadAttributeEdit from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeEdit/LeadAttributeEdit'
import LeadAttributeView from '../../../pages/Leads/components/LeadsAttributes/components/LeadAttributeView/LeadAttributeView'
import LeadAttributes from '../../../pages/Leads/components/LeadsAttributes/LeadAttributes'
import LeadAttributesRoutes from '../../../pages/Leads/components/LeadsAttributes/routes/LeadAttributesRoutes'
import LeadChanges from '../../../pages/Leads/components/Leads/components/LeadChanges/LeadChanges'
import LeadCreate from '../../../pages/Leads/components/Leads/components/LeadCreate/LeadCreate'
import LeadEdit from '../../../pages/Leads/components/Leads/components/LeadEdit/LeadEdit'
import LeadSourceChanges from '../../../pages/Leads/components/LeadSources/components/LeadSourceChanges/LeadSourceChanges'
import LeadSourceCreate from '../../../pages/Leads/components/LeadSources/components/LeadSourceCreate/LeadSourceCreate'
import LeadSourceEdit from '../../../pages/Leads/components/LeadSources/components/LeadSourceEdit/LeadSourceEdit'
import LeadSourceView from '../../../pages/Leads/components/LeadSources/components/LeadSourceView/LeadSourceView'
import LeadSources from '../../../pages/Leads/components/LeadSources/LeadSources'
import LeadSourcesRoutes from '../../../pages/Leads/components/LeadSources/routes/LeadSourcesRoutes'
import LeadView from '../../../pages/Leads/components/Leads/components/LeadView/LeadView'
import Leads from '../../../pages/Leads/components/Leads/Leads'
import LeadsRoutes from '../../../pages/Leads/components/Leads/routes/LeadsRoutes'
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
            <Route path="/settings" component={Settings} />

            {/*  */}

            <Route path={DealsRoutes.Index} exact component={Deals} />
            <Route path={DealsRoutes.Create} exact component={LeadCreate} />
            <Route path={withId(DealsRoutes.View)} exact component={LeadView} />
            <Route path={withId(DealsRoutes.Edit)} exact component={LeadEdit} />
            <Route path={withId(DealsRoutes.Changes)} exact component={LeadChanges} />

            <Route path={DealStatusesRoutes.Index} exact component={DealStatuses} />
            <Route path={DealStatusesRoutes.Create} exact component={DealStatusCreate} />
            <Route path={withId(DealStatusesRoutes.View)} exact component={DealStatusView} />
            <Route path={withId(DealStatusesRoutes.Edit)} exact component={DealStatusEdit} />
            <Route path={withId(DealStatusesRoutes.Changes)} exact component={DealStatusChanges} />

            <Route path={DealTypesRoutes.Index} exact component={DealTypes} />
            <Route path={DealTypesRoutes.Create} exact component={DealTypeCreate} />
            <Route path={withId(DealTypesRoutes.View)} exact component={DealTypeView} />
            <Route path={withId(DealTypesRoutes.Edit)} exact component={DealTypeEdit} />
            <Route path={withId(DealTypesRoutes.Changes)} exact component={DealTypeChanges} />

            <Route path={DealAttributesRoutes.Index} exact component={DealAttributes} />
            <Route path={DealAttributesRoutes.Create} exact component={DealAttributeCreate} />
            <Route path={withId(DealAttributesRoutes.View)} exact component={DealAttributeView} />
            <Route path={withId(DealAttributesRoutes.Edit)} exact component={DealAttributeEdit} />
            <Route path={withId(DealAttributesRoutes.Changes)} exact component={DealAttributeChanges} />

            {/*  */}

            <Route path={LeadsRoutes.Index} exact component={Leads} />
            <Route path={LeadsRoutes.Create} exact component={LeadCreate} />
            <Route path={withId(LeadsRoutes.View)} exact component={LeadView} />
            <Route path={withId(LeadsRoutes.Edit)} exact component={LeadEdit} />
            <Route path={withId(LeadsRoutes.Changes)} exact component={LeadChanges} />

            <Route path={LeadSourcesRoutes.Index} exact component={LeadSources} />
            <Route path={LeadSourcesRoutes.Create} exact component={LeadSourceCreate} />
            <Route path={withId(LeadSourcesRoutes.View)} exact component={LeadSourceView} />
            <Route path={withId(LeadSourcesRoutes.Edit)} exact component={LeadSourceEdit} />
            <Route path={withId(LeadSourcesRoutes.Changes)} exact component={LeadSourceChanges} />

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
