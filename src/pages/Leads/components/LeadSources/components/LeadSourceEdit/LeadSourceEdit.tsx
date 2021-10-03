import React, { FC, useEffect } from 'react'

import CustomerSourceContextProvider from '../../contexts/CustomerSourceContext/CustomerSourceContextProvider'
import CustomerSourceEditForm from './CustomerSourceEditForm'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerSourceEdit: FC = () => {
    const title = 'Изменение источника'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerSourceContextProvider>
            <Page title={title} firstSidebar={<CustomersMenu />}>
                <CustomerSourceEditForm />
            </Page>
        </CustomerSourceContextProvider>
    )
}

export default CustomerSourceEdit
