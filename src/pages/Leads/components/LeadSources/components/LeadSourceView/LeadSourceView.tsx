import React, { FC, useEffect } from 'react'

import CustomerSourceContextProvider from '../../contexts/CustomerSourceContext/CustomerSourceContextProvider'
import CustomerSourceDelete from '../CustomerSourceDelete/CustomerSourceDelete'
import CustomerSourceRestore from '../CustomerSourceRestore/CustomerSourceRestore'
import CustomerSourceViewForm from './CustomerSourceViewForm'
import CustomerSourcesActionsContextProvider from '../../contexts/CustomerSourcesActionsContext/CustomerSourcesActionsContextProvider'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerSourceView: FC = () => {
    const title = 'Просмотр источника'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomerSourcesActionsContextProvider>
            <CustomerSourceContextProvider>
                <Page title={title} firstSidebar={<CustomersMenu />}>
                    <CustomerSourceViewForm />
                    <CustomerSourceDelete />
                    <CustomerSourceRestore />
                </Page>
            </CustomerSourceContextProvider>
        </CustomerSourcesActionsContextProvider>
    )
}

export default CustomerSourceView
