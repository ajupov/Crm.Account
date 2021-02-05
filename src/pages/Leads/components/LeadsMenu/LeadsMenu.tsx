import React, { FC } from 'react'

import LeadAttributesRoutes from '../LeadsAttributes/routes/LeadAttributesRoutes'
import LeadSourcesRoutes from '../LeadSources/routes/LeadSourcesRoutes'
import LeadsRoutes from '../Leads/routes/LeadsRoutes'
import Menu from '../../../../components/common/collections/Menu/Menu'

const LeadsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Лиды', path: LeadsRoutes.Index },
            { name: 'Источники', path: LeadSourcesRoutes.Index },
            { name: 'Атрибуты', path: LeadAttributesRoutes.Index }
        ]}
    />
)

export default LeadsMenu
