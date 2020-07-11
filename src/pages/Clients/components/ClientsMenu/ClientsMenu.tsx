import React, { FC } from 'react'

import CompaniesRoutes from '../Companies/routes/CompaniesRoutes'
import ContactAttributesRoutes from '../ContactAttributes/routes/ContactAttributesRoutes'
import ContactsRoutes from '../Contacts/routes/ContactsRoutes'
import Menu from '../../../../components/common/collections/Menu/Menu'

const ClientsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Контакты', path: ContactsRoutes.Index },
            { name: 'Компании', path: CompaniesRoutes.Index },
            { name: 'Атрибуты контактов', path: ContactAttributesRoutes.Index },
            { name: 'Атрибуты компаний', path: ContactAttributesRoutes.Index }
        ]}
    />
)

export default ClientsMenu
