import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import ContactAttributeContextProvider from '../../contexts/ContactAttributeContext/ContactAttributeContextProvider'
import ContactAttributeEditForm from './ContactAttributeEditForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <ContactAttributeEditForm />
            </Page>
        </ContactAttributeContextProvider>
    )
}

export default ContactAttributeEdit
