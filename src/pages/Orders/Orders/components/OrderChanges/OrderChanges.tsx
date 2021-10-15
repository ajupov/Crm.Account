import React, { FC, useEffect } from 'react'

import OrderChangesContextProvider from '../../contexts/OrderChangesContext/OrderChangesContextProvider'
import OrderChangesFilter from './components/OrderChangesFilter/OrderChangesFilter'
import OrderChangesFilterMobile from './components/OrderChangesFilterMobile/OrderChangesFilterMobile'
import OrderChangesFiltersContextProvider from '../../contexts/OrderChangesFiltersContext/OrderChangesFiltersContextProvider'
import OrderChangesTable from './components/OrderChangesTable/OrderChangesTable'
import OrdersMenu from '../../../OrdersMenu/OrdersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useOrderChangesView from './hooks/useOrderChangesView'

// TODO: Move to l10n
const OrderChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useOrderChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <OrderChangesContextProvider>
            <OrderChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<OrdersMenu />}
                    secondSidebar={<OrderChangesFilter />}
                    secondSidebarMobile={<OrderChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <OrderChangesTable />
                </Page>
            </OrderChangesFiltersContextProvider>
        </OrderChangesContextProvider>
    )
}

export default OrderChanges
