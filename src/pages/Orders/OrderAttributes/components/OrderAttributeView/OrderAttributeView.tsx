import React, { FC, useEffect } from 'react'

import OrderAttributeContextProvider from '../../contexts/OrderAttributeContext/OrderAttributeContextProvider'
import OrderAttributeDelete from '../OrderAttributeDelete/OrderAttributeDelete'
import OrderAttributeRestore from '../OrderAttributeRestore/OrderAttributeRestore'
import OrderAttributeViewForm from './OrderAttributeViewForm'
import OrderAttributesActionsContextProvider from '../../contexts/OrderAttributesActionsContext/OrderAttributesActionsContextProvider'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderAttributesActionsContextProvider>
            <OrderAttributeContextProvider>
                <Page title={title} firstSidebar={<OrdersMenu />}>
                    <OrderAttributeViewForm />
                    <OrderAttributeDelete />
                    <OrderAttributeRestore />
                </Page>
            </OrderAttributeContextProvider>
        </OrderAttributesActionsContextProvider>
    )
}

export default OrderAttributeView
