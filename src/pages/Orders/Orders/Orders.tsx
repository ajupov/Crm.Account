import React, { FC, useEffect } from 'react'

import OrderStatusesContextProvider from './contexts/OrderStatusesContext/OrderStatusesContextProvider'
import OrdersBoard from './components/OrdersBoard/OrdersBoard'
import OrdersContextProvider from './contexts/OrdersContext/OrdersContextProvider'
import OrdersMenu from '../OrdersMenu/OrdersMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const Orders: FC = () => {
    const title = 'Сделки'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderStatusesContextProvider>
            <OrdersContextProvider>
                <Page title={title} useFullHeight firstSidebar={<OrdersMenu />}>
                    <OrdersBoard />
                </Page>
            </OrdersContextProvider>
        </OrderStatusesContextProvider>
    )
}

export default Orders
