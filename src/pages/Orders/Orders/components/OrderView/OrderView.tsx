import React, { FC, useEffect } from 'react'

import OrderCommentContextProvider from '../../contexts/OrderCommentContext/OrderCommentContextProvider'
import OrderComments from '../OrderComments/OrderComments'
import OrderCommentsContextProvider from '../../contexts/OrderCommentsContext/OrderCommentsContextProvider'
import OrderContextProvider from '../../contexts/OrderContext/OrderContextProvider'
import OrderDelete from '../OrderDelete/OrderDelete'
import OrderRestore from '../OrderRestore/OrderRestore'
import OrderViewForm from './OrderViewForm'
import OrdersActionsContextProvider from '../../contexts/OrdersActionsContext/OrdersActionsContextProvider'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderView: FC = () => {
    const title = 'Просмотр заказа'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrdersActionsContextProvider>
            <OrderContextProvider>
                <OrderCommentsContextProvider>
                    <OrderCommentContextProvider>
                        <Page title={title} firstSidebar={<OrdersMenu />}>
                            <OrderViewForm />
                            <OrderComments />
                            <OrderDelete />
                            <OrderRestore />
                        </Page>
                    </OrderCommentContextProvider>
                </OrderCommentsContextProvider>
            </OrderContextProvider>
        </OrdersActionsContextProvider>
    )
}

export default OrderView
