import React, { FC, useEffect } from 'react'

import CustomerChangesContextProvider from '../../contexts/CustomerChangesContext/CustomerChangesContextProvider'
import CustomerChangesFilter from './components/CustomerChangesFilter/CustomerChangesFilter'
import CustomerChangesFilterMobile from './components/CustomerChangesFilterMobile/CustomerChangesFilterMobile'
import CustomerChangesFiltersContextProvider from '../../contexts/CustomerChangesFiltersContext/CustomerChangesFiltersContextProvider'
import CustomerChangesTable from './components/CustomerChangesTable/CustomerChangesTable'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useCustomerChangesView from './hooks/useCustomerChangesView'

// TODO: Move to l10n
const CustomerChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useCustomerChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerChangesContextProvider>
            <CustomerChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<CustomersMenu />}
                    secondSidebar={<CustomerChangesFilter />}
                    secondSidebarMobile={<CustomerChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <CustomerChangesTable />
                </Page>
            </CustomerChangesFiltersContextProvider>
        </CustomerChangesContextProvider>
    )
}

export default CustomerChanges
