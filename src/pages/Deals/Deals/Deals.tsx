import React, { FC, useEffect } from 'react'

import DealStatusesContextProvider from './contexts/DealStatusesContext/DealStatusesContextProvider'
import DealsBoard from './components/DealsBoard/DealsBoard'
import DealsMenu from '../DealsMenu/DealsMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const Deals: FC = () => {
    const title = 'Сделки'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealStatusesContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealsBoard />
            </Page>
        </DealStatusesContextProvider>
    )
}

export default Deals
