import React, { FC, useEffect } from 'react'

import ContactContextProvider from '../../contexts/ContactContext/ContactContextProvider'
import ContactDelete from '../ContactDelete/ContactDelete'
import ContactRestore from '../ContactRestore/ContactRestore'
import ContactViewForm from './ContactViewForm'
import ContactsActionsContextProvider from '../../contexts/ContactsActionsContext/ContactsActionsContextProvider'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactView: FC = () => {
    const title = 'Просмотр контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactsActionsContextProvider>
            <ContactContextProvider>
                <Page title={title} firstSidebar={<ContactsMenu />}>
                    <ContactViewForm />
                    <ContactDelete />
                    <ContactRestore />
                </Page>
            </ContactContextProvider>
        </ContactsActionsContextProvider>
    )
}

export default ContactView
