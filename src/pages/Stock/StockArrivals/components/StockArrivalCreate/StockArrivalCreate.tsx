import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockArrivalContextProvider from '../../contexts/StockArrivalContext/StockArrivalContextProvider'
import StockArrivalCreateForm from './StockArrivalCreateForm'
import StockArrivalsMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockArrivalCreate: FC = () => {
    const title = 'Добавление прихода'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockArrivalContextProvider>
            <Page title={title} firstSidebar={<StockArrivalsMenu />}>
                <StockArrivalCreateForm />
            </Page>
        </StockArrivalContextProvider>
    )
}

export default StockArrivalCreate
