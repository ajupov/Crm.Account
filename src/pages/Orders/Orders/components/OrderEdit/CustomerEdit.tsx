import React, { FC, useEffect } from 'react'

import OrderContextProvider from '../../contexts/OrderContext/OrderContextProvider'
import OrderEditForm from './OrderEditForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderEdit: FC = () => {
    const title = 'Изменение заказа'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderEditForm />
            </Page>
        </OrderContextProvider>
    )
}

export default OrderEdit
