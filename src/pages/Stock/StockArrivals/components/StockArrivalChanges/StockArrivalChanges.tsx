import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockArrivalChangesContextProvider from '../../contexts/StockArrivalChangesContext/StockArrivalChangesContextProvider'
import StockArrivalChangesFilter from './components/StockArrivalChangesFilter/StockArrivalChangesFilter'
import StockArrivalChangesFilterMobile from './components/StockArrivalChangesFilterMobile/StockArrivalChangesFilterMobile'
import StockArrivalChangesFiltersContextProvider from '../../contexts/StockArrivalChangesFiltersContext/StockArrivalChangesFiltersContextProvider'
import StockArrivalChangesTable from './components/StockArrivalChangesTable/StockArrivalChangesTable'
import StockArrivalsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useStockArrivalChangesView from './hooks/useStockArrivalChangesView'

// TODO: Move to l10n
const StockArrivalChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useStockArrivalChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <StockArrivalChangesContextProvider>
            <StockArrivalChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<StockArrivalsMenu />}
                    secondSidebar={<StockArrivalChangesFilter />}
                    secondSidebarMobile={<StockArrivalChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <StockArrivalChangesTable />
                </Page>
            </StockArrivalChangesFiltersContextProvider>
        </StockArrivalChangesContextProvider>
    )
}

export default StockArrivalChanges
