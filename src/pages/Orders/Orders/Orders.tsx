import React, { FC, useEffect } from 'react'

import OrderContextProvider from './contexts/OrderContext/OrderContextProvider'
import OrderDelete from './components/OrderDelete/OrderDelete'
import OrderRestore from './components/OrderRestore/OrderRestore'
import OrdersActionsContextProvider from './contexts/OrdersActionsContext/OrdersActionsContextProvider'
import OrdersContextProvider from './contexts/OrdersContext/OrdersContextProvider'
import OrdersFilter from './components/OrdersFilter/OrdersFilter'
import OrdersFilterMobile from './components/OrdersFilterMobile/OrdersFilterMobile'
import OrdersFiltersContextProvider from './contexts/OrdersFiltersContext/OrdersFiltersContextProvider'
import OrdersMenu from '../OrdersMenu/OrdersMenu'
import OrdersTable from './components/OrdersTable/OrdersTable'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const Orders: FC = () => {
    const title = 'Заказы'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrdersContextProvider>
            <OrdersActionsContextProvider>
                <OrdersFiltersContextProvider>
                    <OrderContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<OrdersMenu />}
                            secondSidebar={<OrdersFilter />}
                            secondSidebarMobile={<OrdersFilterMobile />}
                        >
                            <OrdersTable />
                            <OrderDelete />
                            <OrderRestore />
                        </Page>
                    </OrderContextProvider>
                </OrdersFiltersContextProvider>
            </OrdersActionsContextProvider>
        </OrdersContextProvider>
    )
}

export default Orders
