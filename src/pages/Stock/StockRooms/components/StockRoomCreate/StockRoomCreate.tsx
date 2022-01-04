import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockMenu from '../../../StockMenu/StockMenu'
import StockRoomContextProvider from '../../contexts/StockRoomContext/StockRoomContextProvider'
import StockRoomCreateForm from './StockRoomCreateForm'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockRoomCreate: FC = () => {
    const title = 'Добавление склада'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockRoomContextProvider>
            <Page title={title} firstSidebar={<StockMenu />}>
                <StockRoomCreateForm />
            </Page>
        </StockRoomContextProvider>
    )
}

export default StockRoomCreate
