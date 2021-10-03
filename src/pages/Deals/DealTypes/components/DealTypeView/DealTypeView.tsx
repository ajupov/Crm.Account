import React, { FC, useEffect } from 'react'

import OrderTypeContextProvider from '../../contexts/OrderTypeContext/OrderTypeContextProvider'
import OrderTypeDelete from '../OrderTypeDelete/OrderTypeDelete'
import OrderTypeRestore from '../OrderTypeRestore/OrderTypeRestore'
import OrderTypeViewForm from './OrderTypeViewForm'
import OrderTypesActionsContextProvider from '../../contexts/OrderTypesActionsContext/OrderTypesActionsContextProvider'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderTypeView: FC = () => {
    const title = 'Просмотр типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderTypesActionsContextProvider>
            <OrderTypeContextProvider>
                <Page title={title} firstSidebar={<OrdersMenu />}>
                    <OrderTypeViewForm />
                    <OrderTypeDelete />
                    <OrderTypeRestore />
                </Page>
            </OrderTypeContextProvider>
        </OrderTypesActionsContextProvider>
    )
}

export default OrderTypeView
