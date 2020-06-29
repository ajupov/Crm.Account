import React, { FC, useEffect } from 'react'

import ContactAttributeContextProvider from '../../contexts/ContactAttributeContext/ContactAttributeContextProvider'
import ContactAttributeCreateForm from './ContactAttributeCreateForm'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactAttributeContextProvider>
            <Page title={title} firstSidebar={<ContactsMenu />}>
                <ContactAttributeCreateForm />
            </Page>
        </ContactAttributeContextProvider>
    )
}

export default ContactAttributeCreate
