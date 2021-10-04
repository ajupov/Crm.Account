import React, { FC, useEffect } from 'react'

import OrderTypeChangesContextProvider from '../../contexts/OrderTypeChangesContext/OrderTypeChangesContextProvider'
import OrderTypeChangesFilter from './components/OrderTypeChangesFilter/OrderTypeChangesFilter'
import OrderTypeChangesFilterMobile from './components/OrderTypeChangesFilterMobile/OrderTypeChangesFilterMobile'
import OrderTypeChangesFiltersContextProvider from '../../contexts/OrderTypeChangesFiltersContext/OrderTypeChangesFiltersContextProvider'
import OrderTypeChangesTable from './components/OrderTypeChangesTable/OrderTypeChangesTable'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useOrderTypeChangesView from './hooks/useOrderTypeChangesView'

// TODO: Move to l10n
const OrderTypeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useOrderTypeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderTypeChangesContextProvider>
            <OrderTypeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<OrdersMenu />}
                    secondSidebar={<OrderTypeChangesFilter />}
                    secondSidebarMobile={<OrderTypeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <OrderTypeChangesTable />
                </Page>
            </OrderTypeChangesFiltersContextProvider>
        </OrderTypeChangesContextProvider>
    )
}

export default OrderTypeChanges
