import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../CustomersMenu/CustomersMenu'
import CustomerAttributeContextProvider from '../../contexts/CustomerAttributeContext/CustomerAttributeContextProvider'
import CustomerAttributeEditForm from './CustomerAttributeEditForm'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <CustomerAttributeEditForm />
            </Page>
        </CustomerAttributeContextProvider>
    )
}

export default CustomerAttributeEdit
