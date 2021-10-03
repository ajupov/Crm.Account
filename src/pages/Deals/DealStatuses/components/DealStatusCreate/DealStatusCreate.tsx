import React, { FC, useEffect } from 'react'

import OrderStatusContextProvider from '../../contexts/OrderStatusContext/OrderStatusContextProvider'
import OrderStatusCreateForm from './OrderStatusCreateForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderStatusCreate: FC = () => {
    const title = 'Добавление статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderStatusContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderStatusCreateForm />
            </Page>
        </OrderStatusContextProvider>
    )
}

export default OrderStatusCreate
