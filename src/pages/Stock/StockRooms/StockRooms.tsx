import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import StockMenu from '../../Stock/StockMenu/StockMenu'
import StockRoomContextProvider from './contexts/StockRoomContext/StockRoomContextProvider'
import StockRoomDelete from './components/StockRoomDelete/StockRoomDelete'
import StockRoomRestore from './components/StockRoomRestore/StockRoomRestore'
import StockRoomsActionsContextProvider from './contexts/StockRoomsActionsContext/StockRoomsActionsContextProvider'
import StockRoomsContextProvider from './contexts/StockRoomsContext/StockRoomsContextProvider'
import StockRoomsFilter from './components/StockRoomsFilter/StockRoomsFilter'
import StockRoomsFilterMobile from './components/StockRoomsFilterMobile/StockRoomsFilterMobile'
import StockRoomsFiltersContextProvider from './contexts/StockRoomsFiltersContext/StockRoomsFiltersContextProvider'
import StockRoomsTable from './components/StockRoomsTable/StockRoomsTable'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const StockRooms: FC = () => {
    const title = 'Склады'

    useEffect(() => setPageTitle(title), [])

    return (
        <StockRoomsContextProvider>
            <StockRoomsActionsContextProvider>
                <StockRoomsFiltersContextProvider>
                    <StockRoomContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<StockMenu />}
                            secondSidebar={<StockRoomsFilter />}
                            secondSidebarMobile={<StockRoomsFilterMobile />}
                        >
                            <StockRoomsTable />
                            <StockRoomDelete />
                            <StockRoomRestore />
                        </Page>
                    </StockRoomContextProvider>
                </StockRoomsFiltersContextProvider>
            </StockRoomsActionsContextProvider>
        </StockRoomsContextProvider>
    )
}

export default StockRooms
