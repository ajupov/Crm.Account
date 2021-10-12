import React, { FC, useEffect } from 'react'

import CustomerCommentContextProvider from '../../contexts/CustomerCommentContext/CustomerCommentContextProvider'
import CustomerComments from '../CustomerComments/CustomerComments'
import CustomerCommentsContextProvider from '../../contexts/CustomerCommentsContext/CustomerCommentsContextProvider'
import CustomerContextProvider from '../../contexts/CustomerContext/CustomerContextProvider'
import CustomerDelete from '../CustomerDelete/CustomerDelete'
import CustomerRestore from '../CustomerRestore/CustomerRestore'
import CustomerViewForm from './CustomerViewForm'
import CustomersActionsContextProvider from '../../contexts/CustomersActionsContext/CustomersActionsContextProvider'
import CustomersMenu from '../../../CustomersMenu/CustomersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CustomerView: FC = () => {
    const title = 'Просмотр клиента'

    useEffect(() => setPageTitle(title), [])

    return (
        <CustomersActionsContextProvider>
            <CustomerContextProvider>
                <CustomerCommentsContextProvider>
                    <CustomerCommentContextProvider>
                        <Page title={title} firstSidebar={<CustomersMenu />}>
                            <CustomerViewForm />
                            <CustomerComments />
                            <CustomerDelete />
                            <CustomerRestore />
                        </Page>
                    </CustomerCommentContextProvider>
                </CustomerCommentsContextProvider>
            </CustomerContextProvider>
        </CustomersActionsContextProvider>
    )
}

export default CustomerView
