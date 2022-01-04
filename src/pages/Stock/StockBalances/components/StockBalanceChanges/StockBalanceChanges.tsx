import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockBalanceChangesContextProvider from '../../contexts/StockBalanceChangesContext/StockBalanceChangesContextProvider'
import StockBalanceChangesFilter from './components/StockBalanceChangesFilter/StockBalanceChangesFilter'
import StockBalanceChangesFilterMobile from './components/StockBalanceChangesFilterMobile/StockBalanceChangesFilterMobile'
import StockBalanceChangesFiltersContextProvider from '../../contexts/StockBalanceChangesFiltersContext/StockBalanceChangesFiltersContextProvider'
import StockBalanceChangesTable from './components/StockBalanceChangesTable/StockBalanceChangesTable'
import StockBalancesMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useStockBalanceChangesView from './hooks/useStockBalanceChangesView'

// TODO: Move to l10n
const StockBalanceChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useStockBalanceChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <StockBalanceChangesContextProvider>
            <StockBalanceChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<StockBalancesMenu />}
                    secondSidebar={<StockBalanceChangesFilter />}
                    secondSidebarMobile={<StockBalanceChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <StockBalanceChangesTable />
                </Page>
            </StockBalanceChangesFiltersContextProvider>
        </StockBalanceChangesContextProvider>
    )
}

export default StockBalanceChanges
