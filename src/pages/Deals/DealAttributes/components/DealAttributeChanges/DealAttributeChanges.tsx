import React, { FC, useEffect } from 'react'

import OrderAttributeChangesContextProvider from '../../contexts/OrderAttributeChangesContext/OrderAttributeChangesContextProvider'
import OrderAttributeChangesFilter from './components/OrderAttributeChangesFilter/OrderAttributeChangesFilter'
import OrderAttributeChangesFiltersContextProvider from '../../contexts/OrderAttributeChangesFiltersContext/OrderAttributeChangesFiltersContextProvider'
import OrderAttributeChangesTable from './components/OrderAttributeChangesTable/OrderAttributeChangesTable'
import OrdersAttributeChangesFilterMobile from './components/OrdersAttributeChangesFilterMobile/OrdersAttributeChangesFilterMobile'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useOrderAttributeChangesView from './hooks/useOrderAttributeChangesView'

// TODO: Move to l10n
const OrderAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useOrderAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderAttributeChangesContextProvider>
            <OrderAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<OrdersMenu />}
                    secondSidebar={<OrderAttributeChangesFilter />}
                    secondSidebarMobile={<OrdersAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <OrderAttributeChangesTable />
                </Page>
            </OrderAttributeChangesFiltersContextProvider>
        </OrderAttributeChangesContextProvider>
    )
}

export default OrderAttributeChanges
