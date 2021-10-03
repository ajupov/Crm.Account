import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../CustomersMenu/CustomersMenu'
import CustomerAttributeContextProvider from '../../contexts/CustomerAttributeContext/CustomerAttributeContextProvider'
import CustomerAttributeDelete from '../CustomerAttributeDelete/CustomerAttributeDelete'
import CustomerAttributeRestore from '../CustomerAttributeRestore/CustomerAttributeRestore'
import CustomerAttributeViewForm from './CustomerAttributeViewForm'
import CustomerAttributesActionsContextProvider from '../../contexts/CustomerAttributesActionsContext/CustomerAttributesActionsContextProvider'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerAttributesActionsContextProvider>
            <CustomerAttributeContextProvider>
                <Page title={title} firstSidebar={<ClientsMenu />}>
                    <CustomerAttributeViewForm />
                    <CustomerAttributeDelete />
                    <CustomerAttributeRestore />
                </Page>
            </CustomerAttributeContextProvider>
        </CustomerAttributesActionsContextProvider>
    )
}

export default CustomerAttributeView
