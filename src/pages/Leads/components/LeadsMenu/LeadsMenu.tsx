import React, { FC } from 'react'

import LeadAttributesRoutes from '../LeadsAttributes/routes/LeadAttributesRoutes'
import LeadsRoutes from '../Leads/routes/LeadsRoutes'
import Menu from '../../../../components/common/collections/Menu/Menu'

const LeadsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Лиды', path: LeadsRoutes.Index },
            { name: 'Атрибуты', path: LeadAttributesRoutes.Index }
        ]}
    />
)

export default LeadsMenu
