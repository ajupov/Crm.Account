import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockConsumptionChangesContextProvider from '../../contexts/StockConsumptionChangesContext/StockConsumptionChangesContextProvider'
import StockConsumptionChangesFilter from './components/StockConsumptionChangesFilter/StockConsumptionChangesFilter'
import StockConsumptionChangesFilterMobile from './components/StockConsumptionChangesFilterMobile/StockConsumptionChangesFilterMobile'
import StockConsumptionChangesFiltersContextProvider from '../../contexts/StockConsumptionChangesFiltersContext/StockConsumptionChangesFiltersContextProvider'
import StockConsumptionChangesTable from './components/StockConsumptionChangesTable/StockConsumptionChangesTable'
import StockConsumptionsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useStockConsumptionChangesView from './hooks/useStockConsumptionChangesView'

// TODO: Move to l10n
const StockConsumptionChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useStockConsumptionChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <StockConsumptionChangesContextProvider>
            <StockConsumptionChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<StockConsumptionsMenu />}
                    secondSidebar={<StockConsumptionChangesFilter />}
                    secondSidebarMobile={<StockConsumptionChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <StockConsumptionChangesTable />
                </Page>
            </StockConsumptionChangesFiltersContextProvider>
        </StockConsumptionChangesContextProvider>
    )
}

export default StockConsumptionChanges
