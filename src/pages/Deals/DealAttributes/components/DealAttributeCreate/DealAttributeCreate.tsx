import React, { FC, useEffect } from 'react'

import OrderAttributeContextProvider from '../../contexts/OrderAttributeContext/OrderAttributeContextProvider'
import OrderAttributeCreateForm from './OrderAttributeCreateForm'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderAttributeContextProvider>
            <Page title={title} firstSidebar={<OrdersMenu />}>
                <OrderAttributeCreateForm />
            </Page>
        </OrderAttributeContextProvider>
    )
}

export default OrderAttributeCreate
