import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import ContactContextProvider from '../../contexts/ContactContext/ContactContextProvider'
import ContactCreateForm from './ContactCreateForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactCreate: FC = () => {
    const title = 'Добавление контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <ContactCreateForm />
            </Page>
        </ContactContextProvider>
    )
}

export default ContactCreate
