import React, { FC, useEffect } from 'react'

import ContactContextProvider from '../../contexts/ContactContext/ContactContextProvider'
import ContactCreateForm from './ContactCreateForm'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactCreate: FC = () => {
    const title = 'Добавление контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactContextProvider>
            <Page title={title} firstSidebar={<ContactsMenu />}>
                <ContactCreateForm />
            </Page>
        </ContactContextProvider>
    )
}

export default ContactCreate
