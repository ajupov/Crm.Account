import React, { FC, useEffect } from 'react'

import ContactAttributeContextProvider from './contexts/ContactAttributeContext/ContactAttributeContextProvider'
import ContactAttributeDelete from './components/ContactAttributeDelete/ContactAttributeDelete'
import ContactAttributeRestore from './components/ContactAttributeRestore/ContactAttributeRestore'
import ContactAttributesActionsContextProvider from './contexts/ContactAttributesActionsContext/ContactAttributesActionsContextProvider'
import ContactAttributesContextProvider from './contexts/ContactAttributesContext/ContactAttributesContextProvider'
import ContactAttributesFilter from './components/ContactAttributesFilter/ContactAttributesFilter'
import ContactAttributesFilterMobile from './components/ContactAttributesFilterMobile/ContactAttributesFilterMobile'
import ContactAttributesFiltersContextProvider from './contexts/ContactAttributesFiltersContext/ContactAttributesFiltersContextProvider'
import ContactAttributesTable from './components/ContactAttributesTable/ContactAttributesTable'
import ContactsMenu from '../ContactsMenu/ContactsMenu'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ContactAttributes: FC = () => {
    const title = 'Аттрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactAttributesContextProvider>
            <ContactAttributesActionsContextProvider>
                <ContactAttributesFiltersContextProvider>
                    <ContactAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ContactsMenu />}
                            secondSidebar={<ContactAttributesFilter />}
                            secondSidebarMobile={<ContactAttributesFilterMobile />}
                        >
                            <ContactAttributesTable />
                            <ContactAttributeDelete />
                            <ContactAttributeRestore />
                        </Page>
                    </ContactAttributeContextProvider>
                </ContactAttributesFiltersContextProvider>
            </ContactAttributesActionsContextProvider>
        </ContactAttributesContextProvider>
    )
}

export default ContactAttributes
