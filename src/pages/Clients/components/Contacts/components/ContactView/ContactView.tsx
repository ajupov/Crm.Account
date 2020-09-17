import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import ContactCommentContextProvider from '../../contexts/ContactCommentContext/ContactCommentContextProvider'
import ContactComments from '../ContactComments/ContactComments'
import ContactCommentsContextProvider from '../../contexts/ContactCommentsContext/ContactCommentsContextProvider'
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
                <ContactCommentsContextProvider>
                    <ContactCommentContextProvider>
                        <Page title={title} firstSidebar={<ClientsMenu />}>
                            <ContactViewForm />
                            <ContactComments />
                            <ContactDelete />
                            <ContactRestore />
                        </Page>
                    </ContactCommentContextProvider>
                </ContactCommentsContextProvider>
            </ContactContextProvider>
        </ContactsActionsContextProvider>
    )
}

export default ContactView
