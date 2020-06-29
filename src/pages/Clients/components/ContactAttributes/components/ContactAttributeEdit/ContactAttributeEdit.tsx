import React, { FC, useEffect } from 'react'

import ContactAttributeContextProvider from '../../contexts/ContactAttributeContext/ContactAttributeContextProvider'
import ContactAttributeEditForm from './ContactAttributeEditForm'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactAttributeContextProvider>
            <Page title={title} firstSidebar={<ContactsMenu />}>
                <ContactAttributeEditForm />
            </Page>
        </ContactAttributeContextProvider>
    )
}

export default ContactAttributeEdit
