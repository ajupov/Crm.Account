import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockMenu from '../../../StockMenu/StockMenu'
import StockRoomChangesContextProvider from '../../contexts/StockRoomChangesContext/StockRoomChangesContextProvider'
import StockRoomChangesFilter from './components/StockRoomChangesFilter/StockRoomChangesFilter'
import StockRoomChangesFiltersContextProvider from '../../contexts/StockRoomChangesFiltersContext/StockRoomChangesFiltersContextProvider'
import StockRoomChangesTable from './components/StockRoomChangesTable/StockRoomChangesTable'
import StockStatusChangesFilterMobile from './components/StockStatusChangesFilterMobile/StockStatusChangesFilterMobile'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useStockRoomChangesView from './hooks/useStockRoomChangesView'

// TODO: Move to l10n
const StockRoomChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useStockRoomChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <StockRoomChangesContextProvider>
            <StockRoomChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<StockMenu />}
                    secondSidebar={<StockRoomChangesFilter />}
                    secondSidebarMobile={<StockStatusChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <StockRoomChangesTable />
                </Page>
            </StockRoomChangesFiltersContextProvider>
        </StockRoomChangesContextProvider>
    )
}

export default StockRoomChanges
