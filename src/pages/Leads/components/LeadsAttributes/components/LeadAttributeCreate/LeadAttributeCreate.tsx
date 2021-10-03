import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../CustomersMenu/CustomersMenu'
import CustomerAttributeContextProvider from '../../contexts/CustomerAttributeContext/CustomerAttributeContextProvider'
import CustomerAttributeCreateForm from './CustomerAttributeCreateForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <CustomerAttributeCreateForm />
            </Page>
        </CustomerAttributeContextProvider>
    )
}

export default CustomerAttributeCreate
