import React, { FC, useEffect } from 'react'

import CustomerSourceContextProvider from './contexts/CustomerSourceContext/CustomerSourceContextProvider'
import CustomerSourceDelete from './components/CustomerSourceDelete/CustomerSourceDelete'
import CustomerSourceRestore from './components/CustomerSourceRestore/CustomerSourceRestore'
import CustomerSourcesActionsContextProvider from './contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContextProvider'
import CustomerSourcesContextProvider from './contexts/CustomerSourcesContext/CustomerSourcesContextProvider'
import CustomerSourcesFilter from './components/CustomerSourcesFilter/CustomerSourcesFilter'
import CustomerSourcesFilterMobile from './components/CustomerSourcesFilterMobile/CustomerSourcesFilterMobile'
import CustomerSourcesFiltersContextProvider from './contexts/CustomerSourcesFiltersContext/CustomerSourcesFiltersContextProvider'
import CustomerSourcesTable from './components/CustomerSourcesTable/CustomerSourcesTable'
import CustomersMenu from '../CustomersMenu/CustomersMenu'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerSources: FC = () => {
    const title = 'Источники'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerSourcesContextProvider>
            <CustomerSourcesActionsContextProvider>
                <CustomerSourcesFiltersContextProvider>
                    <CustomerSourceContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<CustomersMenu />}
                            secondSidebar={<CustomerSourcesFilter />}
                            secondSidebarMobile={<CustomerSourcesFilterMobile />}
                        >
                            <CustomerSourcesTable />
                            <CustomerSourceDelete />
                            <CustomerSourceRestore />
                        </Page>
                    </CustomerSourceContextProvider>
                </CustomerSourcesFiltersContextProvider>
            </CustomerSourcesActionsContextProvider>
        </CustomerSourcesContextProvider>
    )
}

export default CustomerSources
