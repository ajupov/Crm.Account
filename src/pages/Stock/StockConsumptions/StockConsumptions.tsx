import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import StockConsumptionContextProvider from './contexts/StockConsumptionContext/StockConsumptionContextProvider'
import StockConsumptionDelete from './components/StockConsumptionDelete/StockConsumptionDelete'
import StockConsumptionRestore from './components/StockConsumptionRestore/StockConsumptionRestore'
import StockConsumptionsActionsContextProvider from './contexts/StockConsumptionsActionsContext/StockConsumptionsActionsContextProvider'
import StockConsumptionsContextProvider from './contexts/StockConsumptionsContext/StockConsumptionsContextProvider'
import StockConsumptionsFilter from './components/StockConsumptionsFilter/StockConsumptionsFilter'
import StockConsumptionsFilterMobile from './components/StockConsumptionsFilterMobile/StockConsumptionsFilterMobile'
import StockConsumptionsFiltersContextProvider from './contexts/StockConsumptionsFiltersContext/StockConsumptionsFiltersContextProvider'
import StockConsumptionsMenu from '../StockMenu/StockMenu'
import StockConsumptionsTable from './components/StockConsumptionsTable/StockConsumptionsTable'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockConsumptions: FC = () => {
    const title = 'Расходы'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockConsumptionsContextProvider>
            <StockConsumptionsActionsContextProvider>
                <StockConsumptionsFiltersContextProvider>
                    <StockConsumptionContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<StockConsumptionsMenu />}
                            secondSidebar={<StockConsumptionsFilter />}
                            secondSidebarMobile={<StockConsumptionsFilterMobile />}
                        >
                            <StockConsumptionsTable />
                            <StockConsumptionDelete />
                            <StockConsumptionRestore />
                        </Page>
                    </StockConsumptionContextProvider>
                </StockConsumptionsFiltersContextProvider>
            </StockConsumptionsActionsContextProvider>
        </StockConsumptionsContextProvider>
    )
}

export default StockConsumptions
