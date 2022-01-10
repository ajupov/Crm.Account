import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import StockArrivalContextProvider from './contexts/StockArrivalContext/StockArrivalContextProvider'
import StockArrivalDelete from './components/StockArrivalDelete/StockArrivalDelete'
import StockArrivalRestore from './components/StockArrivalRestore/StockArrivalRestore'
import StockArrivalsActionsContextProvider from './contexts/StockArrivalsActionsContext/StockArrivalsActionsContextProvider'
import StockArrivalsContextProvider from './contexts/StockArrivalsContext/StockArrivalsContextProvider'
import StockArrivalsFilter from './components/StockArrivalsFilter/StockArrivalsFilter'
import StockArrivalsFilterMobile from './components/StockArrivalsFilterMobile/StockArrivalsFilterMobile'
import StockArrivalsFiltersContextProvider from './contexts/StockArrivalsFiltersContext/StockArrivalsFiltersContextProvider'
import StockArrivalsMenu from '../StockMenu/StockMenu'
import StockArrivalsTable from './components/StockArrivalsTable/StockArrivalsTable'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockArrivals: FC = () => {
    const title = 'Приходы'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockArrivalsContextProvider>
            <StockArrivalsActionsContextProvider>
                <StockArrivalsFiltersContextProvider>
                    <StockArrivalContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<StockArrivalsMenu />}
                            secondSidebar={<StockArrivalsFilter />}
                            secondSidebarMobile={<StockArrivalsFilterMobile />}
                        >
                            <StockArrivalsTable />
                            <StockArrivalDelete />
                            <StockArrivalRestore />
                        </Page>
                    </StockArrivalContextProvider>
                </StockArrivalsFiltersContextProvider>
            </StockArrivalsActionsContextProvider>
        </StockArrivalsContextProvider>
    )
}

export default StockArrivals
