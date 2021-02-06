import React, { FC } from 'react'

import DealAttributesRoutes from '../DealAttributes/routes/DealAttributesRoutes'
import DealStatusesRoutes from '../DealStatuses/routes/DealStatusesRoutes'
import DealTypesRoutes from '../DealTypes/routes/DealTypesRoutes'
import DealsRoutes from '../Deals/routes/DealsRoutes'
import Menu from '../../../components/common/collections/Menu/Menu'

const DealsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Сделки', path: DealsRoutes.Index },
            { name: 'Атрибуты', path: DealAttributesRoutes.Index },
            { name: 'Типы', path: DealTypesRoutes.Index },
            { name: 'Статусы', path: DealStatusesRoutes.Index }
        ]}
    />
)

export default DealsMenu
