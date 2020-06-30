import React, { FC, useEffect } from 'react'

import ContactContextProvider from '../../contexts/ContactContext/ContactContextProvider'
import ContactEditForm from './ContactEditForm'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactEdit: FC = () => {
    const title = 'Изменение контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactContextProvider>
            <Page title={title} firstSidebar={<ContactsMenu />}>
                <ContactEditForm />
            </Page>
        </ContactContextProvider>
    )
}

export default ContactEdit
