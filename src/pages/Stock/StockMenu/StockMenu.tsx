import React, { FC } from 'react'

import Menu from '../../../components/common/collections/Menu/Menu'
import StockBalancesRoutes from '../StockBalances/routes/StockBalancesRoutes'

const StockBalancesMenu: FC = () => (
    <Menu
        items={[
            { name: 'Баланс', path: StockBalancesRoutes.Index }
            // { name: 'Приход', path: '' },
            // { name: 'Расход', path: '' },
            // { name: 'Склады', path: '' }
        ]}
    />
)

export default StockBalancesMenu
