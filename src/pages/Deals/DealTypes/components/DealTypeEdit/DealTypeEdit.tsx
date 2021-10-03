import React, { FC, useEffect } from 'react'

import OrderTypeContextProvider from '../../contexts/OrderTypeContext/OrderTypeContextProvider'
import OrderTypeEditForm from './OrderTypeEditForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderTypeEdit: FC = () => {
    const title = 'Изменение типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderTypeContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderTypeEditForm />
            </Page>
        </OrderTypeContextProvider>
    )
}

export default OrderTypeEdit
