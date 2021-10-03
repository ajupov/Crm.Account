import React, { FC, useEffect } from 'react'

import OrderStatusContextProvider from '../../contexts/OrderStatusContext/OrderStatusContextProvider'
import OrderStatusDelete from '../OrderStatusDelete/OrderStatusDelete'
import OrderStatusRestore from '../OrderStatusRestore/OrderStatusRestore'
import OrderStatusViewForm from './OrderStatusViewForm'
import OrderStatusesActionsContextProvider from '../../contexts/OrderStatusesActionsContext/OrderStatusesActionsContextProvider'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderStatusView: FC = () => {
    const title = 'Просмотр статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderStatusesActionsContextProvider>
            <OrderStatusContextProvider>
                <Page title={title} firstSidebar={<OrdersMenu />}>
                    <OrderStatusViewForm />
                    <OrderStatusDelete />
                    <OrderStatusRestore />
                </Page>
            </OrderStatusContextProvider>
        </OrderStatusesActionsContextProvider>
    )
}

export default OrderStatusView
