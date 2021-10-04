import React, { FC, useEffect } from 'react'

import CustomerContextProvider from './contexts/CustomerContext/CustomerContextProvider'
import CustomerDelete from './components/CustomerDelete/CustomerDelete'
import CustomerRestore from './components/CustomerRestore/CustomerRestore'
import CustomersActionsContextProvider from './contexts/CustomersActionsContext/CustomersActionsContextProvider'
import CustomersContextProvider from './contexts/CustomersContext/CustomersContextProvider'
import CustomersFilter from './components/CustomersFilter/CustomersFilter'
import CustomersFilterMobile from './components/CustomersFilterMobile/CustomersFilterMobile'
import CustomersFiltersContextProvider from './contexts/CustomersFiltersContext/CustomersFiltersContextProvider'
import CustomersMenu from '../CustomersMenu/CustomersMenu'
import CustomersTable from './components/CustomersTable/CustomersTable'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const Customers: FC = () => {
    const title = 'Лиды'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomersContextProvider>
            <CustomersActionsContextProvider>
                <CustomersFiltersContextProvider>
                    <CustomerContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<CustomersMenu />}
                            secondSidebar={<CustomersFilter />}
                            secondSidebarMobile={<CustomersFilterMobile />}
                        >
                            <CustomersTable />
                            <CustomerDelete />
                            <CustomerRestore />
                        </Page>
                    </CustomerContextProvider>
                </CustomersFiltersContextProvider>
            </CustomersActionsContextProvider>
        </CustomersContextProvider>
    )
}

export default Customers
