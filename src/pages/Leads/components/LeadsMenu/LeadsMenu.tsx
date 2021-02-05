import React, { FC } from 'react'

import LeadAttributesRoutes from '../LeadsAttributes/routes/LeadAttributesRoutes'
import Menu from '../../../../components/common/collections/Menu/Menu'

// import LeadsRoutes from '../Leads/routes/LeadsRoutes'


const LeadsMenu: FC = () => (
    <Menu
        items={[
            // { name: 'Лиды', path: LeadsRoutes.Index },
            { name: 'Атрибуты лидов', path: LeadAttributesRoutes.Index }
        ]}
    />
)

export default LeadsMenu
