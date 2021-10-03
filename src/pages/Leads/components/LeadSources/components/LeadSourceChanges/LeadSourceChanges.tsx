import React, { FC, useEffect } from 'react'

import CustomerSourceChangesContextProvider from '../../contexts/CustomerSourceChangesContext/CustomerSourceChangesContextProvider'
import CustomerSourceChangesFilter from './components/CustomerSourceChangesFilter/CustomerSourceChangesFilter'
import CustomerSourceChangesFiltersContextProvider from '../../contexts/CustomerSourceChangesFiltersContext/CustomerSourceChangesFiltersContextProvider'
import CustomerSourceChangesTable from './components/CustomerSourceChangesTable/CustomerSourceChangesTable'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import CustomersSourceChangesFilterMobile from './components/CustomersSourceChangesFilterMobile/CustomersSourceChangesFilterMobile'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useCustomerSourceChangesView from './hooks/useCustomerSourceChangesView'

// TODO: Move to l10n
const CustomerSourceChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useCustomerSourceChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerSourceChangesContextProvider>
            <CustomerSourceChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<CustomersMenu />}
                    secondSidebar={<CustomerSourceChangesFilter />}
                    secondSidebarMobile={<CustomersSourceChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <CustomerSourceChangesTable />
                </Page>
            </CustomerSourceChangesFiltersContextProvider>
        </CustomerSourceChangesContextProvider>
    )
}

export default CustomerSourceChanges
