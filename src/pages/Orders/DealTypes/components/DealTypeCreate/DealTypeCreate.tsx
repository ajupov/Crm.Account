import React, { FC, useEffect } from 'react'

import OrderTypeContextProvider from '../../contexts/OrderTypeContext/OrderTypeContextProvider'
import OrderTypeCreateForm from './OrderTypeCreateForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderTypeCreate: FC = () => {
    const title = 'Добавление типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderTypeContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderTypeCreateForm />
            </Page>
        </OrderTypeContextProvider>
    )
}

export default OrderTypeCreate
