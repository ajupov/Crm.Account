import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockConsumptionContextProvider from '../../contexts/StockConsumptionContext/StockConsumptionContextProvider'
import StockConsumptionDelete from '../StockConsumptionDelete/StockConsumptionDelete'
import StockConsumptionRestore from '../StockConsumptionRestore/StockConsumptionRestore'
import StockConsumptionViewForm from './StockConsumptionViewForm'
import StockConsumptionsActionsContextProvider from '../../contexts/StockConsumptionsActionsContext/StockConsumptionsActionsContextProvider'
import StockConsumptionsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockConsumptionView: FC = () => {
    const title = 'Просмотр расхода'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockConsumptionsActionsContextProvider>
            <StockConsumptionContextProvider>
                <Page title={title} firstSidebar={<StockConsumptionsMenu />}>
                    <StockConsumptionViewForm />
                    <StockConsumptionDelete />
                    <StockConsumptionRestore />
                </Page>
            </StockConsumptionContextProvider>
        </StockConsumptionsActionsContextProvider>
    )
}

export default StockConsumptionView
