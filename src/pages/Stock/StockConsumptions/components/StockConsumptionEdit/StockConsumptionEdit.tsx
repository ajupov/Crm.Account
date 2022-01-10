import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockConsumptionContextProvider from '../../contexts/StockConsumptionContext/StockConsumptionContextProvider'
import StockConsumptionEditForm from './StockConsumptionEditForm'
import StockConsumptionsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockConsumptionEdit: FC = () => {
    const title = 'Изменение расхода'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockConsumptionContextProvider>
            <Page title={title} firstSidebar={<StockConsumptionsMenu />}>
                <StockConsumptionEditForm />
            </Page>
        </StockConsumptionContextProvider>
    )
}

export default StockConsumptionEdit
