import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockConsumptionContextProvider from '../../contexts/StockConsumptionContext/StockConsumptionContextProvider'
import StockConsumptionCreateForm from './StockConsumptionCreateForm'
import StockConsumptionsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockConsumptionCreate: FC = () => {
    const title = 'Добавление расхода'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockConsumptionContextProvider>
            <Page title={title} firstSidebar={<StockConsumptionsMenu />}>
                <StockConsumptionCreateForm />
            </Page>
        </StockConsumptionContextProvider>
    )
}

export default StockConsumptionCreate
