import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import StockBalanceContextProvider from './contexts/StockBalanceContext/StockBalanceContextProvider'
import StockBalanceDelete from './components/StockBalanceDelete/StockBalanceDelete'
import StockBalanceRestore from './components/StockBalanceRestore/StockBalanceRestore'
import StockBalancesActionsContextProvider from './contexts/StockBalancesActionsContext/StockBalancesActionsContextProvider'
import StockBalancesContextProvider from './contexts/StockBalancesContext/StockBalancesContextProvider'
import StockBalancesFilter from './components/StockBalancesFilter/StockBalancesFilter'
import StockBalancesFilterMobile from './components/StockBalancesFilterMobile/StockBalancesFilterMobile'
import StockBalancesFiltersContextProvider from './contexts/StockBalancesFiltersContext/StockBalancesFiltersContextProvider'
import StockBalancesMenu from '../StockMenu/StockMenu'
import StockBalancesTable from './components/StockBalancesTable/StockBalancesTable'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockBalances: FC = () => {
    const title = 'Остатки'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockBalancesContextProvider>
            <StockBalancesActionsContextProvider>
                <StockBalancesFiltersContextProvider>
                    <StockBalanceContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<StockBalancesMenu />}
                            secondSidebar={<StockBalancesFilter />}
                            secondSidebarMobile={<StockBalancesFilterMobile />}
                        >
                            <StockBalancesTable />
                            <StockBalanceDelete />
                            <StockBalanceRestore />
                        </Page>
                    </StockBalanceContextProvider>
                </StockBalancesFiltersContextProvider>
            </StockBalancesActionsContextProvider>
        </StockBalancesContextProvider>
    )
}

export default StockBalances
