import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import StockMenu from '../../../StockMenu/StockMenu'
import StockRoomContextProvider from '../../contexts/StockRoomContext/StockRoomContextProvider'
import StockRoomDelete from '../StockRoomDelete/StockRoomDelete'
import StockRoomRestore from '../StockRoomRestore/StockRoomRestore'
import StockRoomViewForm from './StockRoomViewForm'
import StockRoomsActionsContextProvider from '../../contexts/StockRoomsActionsContext/StockRoomsActionsContextProvider'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockRoomView: FC = () => {
    const title = 'Просмотр склада'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockRoomsActionsContextProvider>
            <StockRoomContextProvider>
                <Page title={title} firstSidebar={<StockMenu />}>
                    <StockRoomViewForm />
                    <StockRoomDelete />
                    <StockRoomRestore />
                </Page>
            </StockRoomContextProvider>
        </StockRoomsActionsContextProvider>
    )
}

export default StockRoomView
