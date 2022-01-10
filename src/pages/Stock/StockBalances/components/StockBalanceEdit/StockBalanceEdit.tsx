import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockBalanceContextProvider from '../../contexts/StockBalanceContext/StockBalanceContextProvider'
import StockBalanceEditForm from './StockBalanceEditForm'
import StockBalancesMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockBalanceEdit: FC = () => {
    const title = 'Изменение остатка'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockBalanceContextProvider>
            <Page title={title} firstSidebar={<StockBalancesMenu />}>
                <StockBalanceEditForm />
            </Page>
        </StockBalanceContextProvider>
    )
}

export default StockBalanceEdit
