import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import StockBalancesRoutes from '../StockBalances/routes/StockBalancesRoutes'
import StockRoomsRoutes from '../StockRooms/routes/StockRoomsRoutes'

const StockBalancesMenu: FC = () => (
    <Menu
        items={[
            { name: 'Баланс', path: StockBalancesRoutes.Index },
            // { name: 'Приход', path: '' },
            // { name: 'Расход', path: '' },
            { name: 'Склады', path: StockRoomsRoutes.Index }
        ]}
    />
)

export default StockBalancesMenu
