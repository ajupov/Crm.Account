import React, { FC, useEffect } from 'react'

import OrderStatusContextProvider from './contexts/OrderStatusContext/OrderStatusContextProvider'
import OrderStatusDelete from './components/OrderStatusDelete/OrderStatusDelete'
import OrderStatusRestore from './components/OrderStatusRestore/OrderStatusRestore'
import OrderStatusesActionsContextProvider from './contexts/OrderStatusesActionsContext/OrderStatusesActionsContextProvider'
import OrderStatusesContextProvider from './contexts/OrderStatusesContext/OrderStatusesContextProvider'
import OrderStatusesFilter from './components/OrderStatusesFilter/OrderStatusesFilter'
import OrderStatusesFilterMobile from './components/OrderStatusesFilterMobile/OrderStatusesFilterMobile'
import OrderStatusesFiltersContextProvider from './contexts/OrderStatusesFiltersContext/OrderStatusesFiltersContextProvider'
import OrderStatusesTable from './components/OrderStatusesTable/OrderStatusesTable'
import OrdersMenu from '../OrdersMenu/OrdersMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderStatuses: FC = () => {
    const title = 'Статусы'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderStatusesContextProvider>
            <OrderStatusesActionsContextProvider>
                <OrderStatusesFiltersContextProvider>
                    <OrderStatusContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<OrdersMenu />}
                            secondSidebar={<OrderStatusesFilter />}
                            secondSidebarMobile={<OrderStatusesFilterMobile />}
                        >
                            <OrderStatusesTable />
                            <OrderStatusDelete />
                            <OrderStatusRestore />
                        </Page>
                    </OrderStatusContextProvider>
                </OrderStatusesFiltersContextProvider>
            </OrderStatusesActionsContextProvider>
        </OrderStatusesContextProvider>
    )
}

export default OrderStatuses
