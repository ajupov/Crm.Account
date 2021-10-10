import React, { FC, useEffect } from 'react'

import OrderAttributeContextProvider from './contexts/OrderAttributeContext/OrderAttributeContextProvider'
import OrderAttributeDelete from './components/OrderAttributeDelete/OrderAttributeDelete'
import OrderAttributeRestore from './components/OrderAttributeRestore/OrderAttributeRestore'
import OrderAttributesActionsContextProvider from './contexts/OrderAttributesActionsContext/OrderAttributesActionsContextProvider'
import OrderAttributesContextProvider from './contexts/OrderAttributesContext/OrderAttributesContextProvider'
import OrderAttributesFilter from './components/OrderAttributesFilter/OrderAttributesFilter'
import OrderAttributesFilterMobile from './components/OrderAttributesFilterMobile/OrderAttributesFilterMobile'
import OrderAttributesFiltersContextProvider from './contexts/OrderAttributesFiltersContext/OrderAttributesFiltersContextProvider'
import OrderAttributesTable from './components/OrderAttributesTable/OrderAttributesTable'
import OrdersMenu from '../OrdersMenu/OrdersMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const OrderAttributes: FC = () => {
    const title = 'Атрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderAttributesContextProvider>
            <OrderAttributesActionsContextProvider>
                <OrderAttributesFiltersContextProvider>
                    <OrderAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<OrdersMenu />}
                            secondSidebar={<OrderAttributesFilter />}
                            secondSidebarMobile={<OrderAttributesFilterMobile />}
                        >
                            <OrderAttributesTable />
                            <OrderAttributeDelete />
                            <OrderAttributeRestore />
                        </Page>
                    </OrderAttributeContextProvider>
                </OrderAttributesFiltersContextProvider>
            </OrderAttributesActionsContextProvider>
        </OrderAttributesContextProvider>
    )
}

export default OrderAttributes
