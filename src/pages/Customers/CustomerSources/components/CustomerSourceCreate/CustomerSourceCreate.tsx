import React, { FC, useEffect } from 'react'

import CustomerSourceContextProvider from '../../contexts/CustomerSourceContext/CustomerSourceContextProvider'
import CustomerSourceCreateForm from './CustomerSourceCreateForm'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerSourceCreate: FC = () => {
    const title = 'Добавление источника'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerSourceContextProvider>
            <Page title={title} firstSidebar={<CustomersMenu />}>
                <CustomerSourceCreateForm />
            </Page>
        </CustomerSourceContextProvider>
    )
}

export default CustomerSourceCreate
