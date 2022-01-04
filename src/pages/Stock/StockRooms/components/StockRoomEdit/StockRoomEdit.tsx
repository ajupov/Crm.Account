import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockMenu from '../../../StockMenu/StockMenu'
import StockRoomContextProvider from '../../contexts/StockRoomContext/StockRoomContextProvider'
import StockRoomEditForm from './StockRoomEditForm'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockRoomEdit: FC = () => {
    const title = 'Изменение склада'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockRoomContextProvider>
            <Page title={title} firstSidebar={<StockMenu />}>
                <StockRoomEditForm />
            </Page>
        </StockRoomContextProvider>
    )
}

export default StockRoomEdit
