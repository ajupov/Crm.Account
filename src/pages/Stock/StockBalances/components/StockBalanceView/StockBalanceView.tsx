import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockBalanceContextProvider from '../../contexts/StockBalanceContext/StockBalanceContextProvider'
import StockBalanceDelete from '../StockBalanceDelete/StockBalanceDelete'
import StockBalanceRestore from '../StockBalanceRestore/StockBalanceRestore'
import StockBalanceViewForm from './StockBalanceViewForm'
import StockBalancesActionsContextProvider from '../../contexts/StockBalancesActionsContext/StockBalancesActionsContextProvider'
import StockBalancesMenu from '../../../StockMenu/StockMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockBalanceView: FC = () => {
    const title = 'Просмотр баланса'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockBalancesActionsContextProvider>
            <StockBalanceContextProvider>
                <Page title={title} firstSidebar={<StockBalancesMenu />}>
                    <StockBalanceViewForm />
                    <StockBalanceDelete />
                    <StockBalanceRestore />
                </Page>
            </StockBalanceContextProvider>
        </StockBalancesActionsContextProvider>
    )
}

export default StockBalanceView
