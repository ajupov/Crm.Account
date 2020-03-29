import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { FC } from 'react'

import Activities from '../../pages/activities/Activities'
import Calendar from '../../pages/calendar/Calendar'
import Contacts from '../../pages/contacts/Contacts'
import Dashboard from '../../pages/dashboard/Dashboard'
import Deals from '../../pages/deals/Deals'
import Layout from '../layout/Layout'
import Leads from '../../pages/leads/Leads'
import Loader from '../loader/Loader'
import NotFound from '../../pages/notFound/NotFound'
import ProductCategories from '../../pages/products/categories/ProductCategories'
import ProductCategory from '../../pages/products/categories/ProductCategory'
import ProductCategoryCreate from '../../pages/products/categories/ProductCategoryCreate'
import ProductCategoryEdit from '../../pages/products/categories/ProductCategoryEdit'
import Products from '../../pages/products/products/Products'
import Settings from '../../pages/settings/Settings'
import UserInfoContext from '../../contexts/UserInfoContext'
import useUserInfo from '../../hooks/useUserInfo'

const Application: FC = () => {
    const userInfo = useUserInfo()

    return userInfo.isAuthenticated ? (
        <UserInfoContext.Provider value={userInfo}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/activities" component={Activities} />
                        <Route path="/leads" component={Leads} />
                        <Route path="/deals" component={Deals} />
                        <Route path="/contacts" component={Contacts} />

                        <Route path="/products" exact component={Products} />
                        <Route path="/products/categories" exact component={ProductCategories} />
                        <Route path="/products/categories/:id" exact component={ProductCategory} />
                        <Route path="/products/categories/create" exact component={ProductCategoryCreate} />
                        <Route path="/products/categories/edit/:id" exact component={ProductCategoryEdit} />

                        <Route path="/settings" component={Settings} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </UserInfoContext.Provider>
    ) : (
        <Loader isLoading />
    )
}

export default Application
