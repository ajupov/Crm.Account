import React, { FC } from 'react'

import ContactAttributesRoutes from '../ContactAttributes/routes/ContactAttributesRoutes'
import ContactsRoutes from '../Contacts/routes/ContactsRoutes'
import Menu from '../../../../components/common/collections/Menu/Menu'

const ContactsMenu: FC = () => (
    <Menu
        items={[
            { name: 'Контакты', path: ContactsRoutes.Index },
            { name: 'Атрибуты', path: ContactAttributesRoutes.Index }
        ]}
    />
)

export default ContactsMenu
