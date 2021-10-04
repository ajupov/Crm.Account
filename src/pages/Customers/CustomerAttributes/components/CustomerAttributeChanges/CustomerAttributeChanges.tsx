import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../CustomersMenu/CustomersMenu'
import CustomerAttributeChangesContextProvider from '../../contexts/CustomerAttributeChangesContext/CustomerAttributeChangesContextProvider'
import CustomerAttributeChangesFilter from './components/CustomerAttributeChangesFilter/CustomerAttributeChangesFilter'
import CustomerAttributeChangesFiltersContextProvider from '../../contexts/CustomerAttributeChangesFiltersContext/CustomerAttributeChangesFiltersContextProvider'
import CustomerAttributeChangesTable from './components/CustomerAttributeChangesTable/CustomerAttributeChangesTable'
import CustomersAttributeChangesFilterMobile from './components/CustomersAttributeChangesFilterMobile/CustomersAttributeChangesFilterMobile'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useCustomerAttributeChangesView from './hooks/useCustomerAttributeChangesView'

// TODO: Move to l10n
const CustomerAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useCustomerAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerAttributeChangesContextProvider>
            <CustomerAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ClientsMenu />}
                    secondSidebar={<CustomerAttributeChangesFilter />}
                    secondSidebarMobile={<CustomersAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <CustomerAttributeChangesTable />
                </Page>
            </CustomerAttributeChangesFiltersContextProvider>
        </CustomerAttributeChangesContextProvider>
    )
}

export default CustomerAttributeChanges
