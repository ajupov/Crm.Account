import React, { FC, useEffect } from 'react'

import OrderContextProvider from '../../contexts/OrderContext/OrderContextProvider'
import OrderCreateForm from './OrderCreateForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderCreate: FC = () => {
    const title = 'Добавление заказа'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderCreateForm />
            </Page>
        </OrderContextProvider>
    )
}

export default OrderCreate
