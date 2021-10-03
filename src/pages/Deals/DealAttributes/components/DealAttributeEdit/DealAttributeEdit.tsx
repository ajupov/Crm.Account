import React, { FC, useEffect } from 'react'

import OrderAttributeContextProvider from '../../contexts/OrderAttributeContext/OrderAttributeContextProvider'
import OrderAttributeEditForm from './OrderAttributeEditForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderAttributeContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderAttributeEditForm />
            </Page>
        </OrderAttributeContextProvider>
    )
}

export default OrderAttributeEdit
