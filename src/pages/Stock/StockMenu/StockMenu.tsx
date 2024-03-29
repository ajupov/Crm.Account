import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import StockArrivalsRoutes from '../StockArrivals/routes/StockArrivalsRoutes'
import StockBalancesRoutes from '../StockBalances/routes/StockBalancesRoutes'
import StockConsumptionsRoutes from '../StockConsumptions/routes/StockConsumptionsRoutes'
import StockRoomsRoutes from '../StockRooms/routes/StockRoomsRoutes'

const StockBalancesMenu: FC = () => (
    <Menu
        items={[
            { name: 'Остатки', path: StockBalancesRoutes.Index },
            { name: 'Приходы', path: StockArrivalsRoutes.Index },
            { name: 'Расходы', path: StockConsumptionsRoutes.Index },
            { name: 'Склады', path: StockRoomsRoutes.Index }
        ]}
    />
)

export default StockBalancesMenu
