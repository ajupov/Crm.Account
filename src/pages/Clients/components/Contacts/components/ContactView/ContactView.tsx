import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import ContactComments from '../ContactComments/ContactComments'
import ContactContextProvider from '../../contexts/ContactContext/ContactContextProvider'
import ContactDelete from '../ContactDelete/ContactDelete'
import ContactRestore from '../ContactRestore/ContactRestore'
import ContactViewForm from './ContactViewForm'
import ContactsActionsContextProvider from '../../contexts/ContactsActionsContext/ContactsActionsContextProvider'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactView: FC = () => {
    const title = 'Просмотр контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactsActionsContextProvider>
            <ContactContextProvider>
                <Page title={title} firstSidebar={<ClientsMenu />}>
                    <ContactViewForm />
                    <ContactComments />
                    <ContactDelete />
                    <ContactRestore />
                </Page>
            </ContactContextProvider>
        </ContactsActionsContextProvider>
    )
}

export default ContactView
