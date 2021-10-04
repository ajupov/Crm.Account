import React, { FC, useEffect } from 'react'

import CustomerContextProvider from '../../contexts/CustomerContext/CustomerContextProvider'
import CustomerCreateForm from './CustomerCreateForm'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerCreate: FC = () => {
    const title = 'Добавление лида'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerContextProvider>
            <Page title={title} firstSidebar={<CustomersMenu />}>
                <CustomerCreateForm />
            </Page>
        </CustomerContextProvider>
    )
}

export default CustomerCreate
