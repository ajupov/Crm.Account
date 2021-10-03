import React, { FC, useEffect } from 'react'

import OrderStatusChangesContextProvider from '../../contexts/OrderStatusChangesContext/OrderStatusChangesContextProvider'
import OrderStatusChangesFilter from './components/OrderStatusChangesFilter/OrderStatusChangesFilter'
import OrderStatusChangesFiltersContextProvider from '../../contexts/OrderStatusChangesFiltersContext/OrderStatusChangesFiltersContextProvider'
import OrderStatusChangesTable from './components/OrderStatusChangesTable/OrderStatusChangesTable'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import OrdersStatusChangesFilterMobile from './components/OrdersStatusChangesFilterMobile/OrdersStatusChangesFilterMobile'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useOrderStatusChangesView from './hooks/useOrderStatusChangesView'

// TODO: Move to l10n
const OrderStatusChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useOrderStatusChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderStatusChangesContextProvider>
            <OrderStatusChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<OrdersMenu />}
                    secondSidebar={<OrderStatusChangesFilter />}
                    secondSidebarMobile={<OrdersStatusChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <OrderStatusChangesTable />
                </Page>
            </OrderStatusChangesFiltersContextProvider>
        </OrderStatusChangesContextProvider>
    )
}

export default OrderStatusChanges
