import React, { FC, useEffect } from 'react'

import CustomerContextProvider from '../../contexts/CustomerContext/CustomerContextProvider'
import CustomerEditForm from './CustomerEditForm'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerEdit: FC = () => {
    const title = 'Изменение клиента'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerContextProvider>
            <Page title={title} firstSidebar={<CustomersMenu />}>
                <CustomerEditForm />
            </Page>
        </CustomerContextProvider>
    )
}

export default CustomerEdit
