import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockBalanceContextProvider from '../../contexts/StockBalanceContext/StockBalanceContextProvider'
import StockBalanceCreateForm from './StockBalanceCreateForm'
import StockBalancesMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockBalanceCreate: FC = () => {
    const title = 'Добавление остатка'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockBalanceContextProvider>
            <Page title={title} firstSidebar={<StockBalancesMenu />}>
                <StockBalanceCreateForm />
            </Page>
        </StockBalanceContextProvider>
    )
}

export default StockBalanceCreate
