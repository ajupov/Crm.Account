import React, { FC, useEffect } from 'react'

import ClientsMenu from '../CustomersMenu/CustomersMenu'
import CustomerAttributeContextProvider from './contexts/CustomerAttributeContext/CustomerAttributeContextProvider'
import CustomerAttributeDelete from './components/CustomerAttributeDelete/CustomerAttributeDelete'
import CustomerAttributeRestore from './components/CustomerAttributeRestore/CustomerAttributeRestore'
import CustomerAttributesActionsContextProvider from './contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContextProvider'
import CustomerAttributesContextProvider from './contexts/CustomerAttributesContext/CustomerAttributesContextProvider'
import CustomerAttributesFilter from './components/CustomerAttributesFilter/CustomerAttributesFilter'
import CustomerAttributesFilterMobile from './components/CustomerAttributesFilterMobile/CustomerAttributesFilterMobile'
import CustomerAttributesFiltersContextProvider from './contexts/CustomerAttributesFiltersContext/CustomerAttributesFiltersContextProvider'
import CustomerAttributesTable from './components/CustomerAttributesTable/CustomerAttributesTable'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerAttributes: FC = () => {
    const title = 'Атрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerAttributesContextProvider>
            <CustomerAttributesActionsContextProvider>
                <CustomerAttributesFiltersContextProvider>
                    <CustomerAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ClientsMenu />}
                            secondSidebar={<CustomerAttributesFilter />}
                            secondSidebarMobile={<CustomerAttributesFilterMobile />}
                        >
                            <CustomerAttributesTable />
                            <CustomerAttributeDelete />
                            <CustomerAttributeRestore />
                        </Page>
                    </CustomerAttributeContextProvider>
                </CustomerAttributesFiltersContextProvider>
            </CustomerAttributesActionsContextProvider>
        </CustomerAttributesContextProvider>
    )
}

export default CustomerAttributes
