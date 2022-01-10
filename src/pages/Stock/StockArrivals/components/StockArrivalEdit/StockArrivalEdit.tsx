import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockArrivalContextProvider from '../../contexts/StockArrivalContext/StockArrivalContextProvider'
import StockArrivalEditForm from './StockArrivalEditForm'
import StockArrivalsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockArrivalEdit: FC = () => {
    const title = 'Изменение прихода'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockArrivalContextProvider>
            <Page title={title} firstSidebar={<StockArrivalsMenu />}>
                <StockArrivalEditForm />
            </Page>
        </StockArrivalContextProvider>
    )
}

export default StockArrivalEdit
