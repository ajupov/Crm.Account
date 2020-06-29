import React, { FC, useEffect } from 'react'

import ContactAttributeContextProvider from '../../contexts/ContactAttributeContext/ContactAttributeContextProvider'
import ContactAttributeDelete from '../ContactAttributeDelete/ContactAttributeDelete'
import ContactAttributeRestore from '../ContactAttributeRestore/ContactAttributeRestore'
import ContactAttributeViewForm from './ContactAttributeViewForm'
import ContactAttributesActionsContextProvider from '../../contexts/ContactAttributesActionsContext/ContactAttributesActionsContextProvider'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactAttributesActionsContextProvider>
            <ContactAttributeContextProvider>
                <Page title={title} firstSidebar={<ContactsMenu />}>
                    <ContactAttributeViewForm />
                    <ContactAttributeDelete />
                    <ContactAttributeRestore />
                </Page>
            </ContactAttributeContextProvider>
        </ContactAttributesActionsContextProvider>
    )
}

export default ContactAttributeView
