import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockArrivalContextProvider from '../../contexts/StockArrivalContext/StockArrivalContextProvider'
import StockArrivalDelete from '../StockArrivalDelete/StockArrivalDelete'
import StockArrivalRestore from '../StockArrivalRestore/StockArrivalRestore'
import StockArrivalViewForm from './StockArrivalViewForm'
import StockArrivalsActionsContextProvider from '../../contexts/StockArrivalsActionsContext/StockArrivalsActionsContextProvider'
import StockArrivalsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockArrivalView: FC = () => {
    const title = 'Просмотр прихода'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockArrivalsActionsContextProvider>
            <StockArrivalContextProvider>
                <Page title={title} firstSidebar={<StockArrivalsMenu />}>
                    <StockArrivalViewForm />
                    <StockArrivalDelete />
                    <StockArrivalRestore />
                </Page>
            </StockArrivalContextProvider>
        </StockArrivalsActionsContextProvider>
    )
}

export default StockArrivalView
