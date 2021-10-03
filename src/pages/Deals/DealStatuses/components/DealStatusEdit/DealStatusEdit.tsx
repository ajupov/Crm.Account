import React, { FC, useEffect } from 'react'

import OrderStatusContextProvider from '../../contexts/OrderStatusContext/OrderStatusContextProvider'
import OrderStatusEditForm from './OrderStatusEditForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderStatusEdit: FC = () => {
    const title = 'Изменение статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderStatusContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderStatusEditForm />
            </Page>
        </OrderStatusContextProvider>
    )
}

export default OrderStatusEdit
