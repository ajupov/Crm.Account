import React, { FC, useEffect } from 'react'

import OrderTypeContextProvider from './contexts/OrderTypeContext/OrderTypeContextProvider'
import OrderTypeDelete from './components/OrderTypeDelete/OrderTypeDelete'
import OrderTypeRestore from './components/OrderTypeRestore/OrderTypeRestore'
import OrderTypesActionsContextProvider from './contexts/OrderTypesActionsContext/OrderTypesActionsContextProvider'
import OrderTypesContextProvider from './contexts/OrderTypesContext/OrderTypesContextProvider'
import OrderTypesFilter from './components/OrderTypesFilter/OrderTypesFilter'
import OrderTypesFilterMobile from './components/OrderTypesFilterMobile/OrderTypesFilterMobile'
import OrderTypesFiltersContextProvider from './contexts/OrderTypesFiltersContext/OrderTypesFiltersContextProvider'
import OrderTypesTable from './components/OrderTypesTable/OrderTypesTable'
import OrdersMenu from '../OrdersMenu/OrdersMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderTypes: FC = () => {
    const title = 'Типы'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderTypesContextProvider>
            <OrderTypesActionsContextProvider>
                <OrderTypesFiltersContextProvider>
                    <OrderTypeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<OrdersMenu />}
                            secondSidebar={<OrderTypesFilter />}
                            secondSidebarMobile={<OrderTypesFilterMobile />}
                        >
                            <OrderTypesTable />
                            <OrderTypeDelete />
                            <OrderTypeRestore />
                        </Page>
                    </OrderTypeContextProvider>
                </OrderTypesFiltersContextProvider>
            </OrderTypesActionsContextProvider>
        </OrderTypesContextProvider>
    )
}

export default OrderTypes
