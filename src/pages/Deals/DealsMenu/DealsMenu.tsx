import React, { FC } from 'react'

import DealAttributesRoutes from '../DealAttributes/routes/DealAttributesRoutes'
import DealStatusesRoutes from '../DealStatuses/routes/DealStatusesRoutes'
import DealsRoutes from '../Deals/routes/DealsRoutes'
import Menu from '../../../components/common/collections/Menu/Menu'

const DealsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Сделки', path: DealsRoutes.Index },
            { name: 'Атрибуты', path: DealAttributesRoutes.Index },
            { name: 'Статусы', path: DealStatusesRoutes.Index }
        ]}
    />
)

export default DealsMenu
