import React, { FC, useEffect } from 'react'

import ContactContextProvider from './contexts/ContactContext/ContactContextProvider'
import ContactDelete from './components/ContactDelete/ContactDelete'
import ContactRestore from './components/ContactRestore/ContactRestore'
import ContactsActionsContextProvider from './contexts/ContactsActionsContext/ContactsActionsContextProvider'
import ContactsContextProvider from './contexts/ContactsContext/ContactsContextProvider'
import ContactsFilter from './components/ContactsFilter/ContactsFilter'
import ContactsFilterMobile from './components/ContactsFilterMobile/ContactsFilterMobile'
import ContactsFiltersContextProvider from './contexts/ContactsFiltersContext/ContactsFiltersContextProvider'
import ContactsMenu from '../ContactsMenu/ContactsMenu'
import ContactsTable from './components/ContactsTable/ContactsTable'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const Contacts: FC = () => {
    const title = 'Контакты'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactsContextProvider>
            <ContactsActionsContextProvider>
                <ContactsFiltersContextProvider>
                    <ContactContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ContactsMenu />}
                            secondSidebar={<ContactsFilter />}
                            secondSidebarMobile={<ContactsFilterMobile />}
                        >
                            <ContactsTable />
                            <ContactDelete />
                            <ContactRestore />
                        </Page>
                    </ContactContextProvider>
                </ContactsFiltersContextProvider>
            </ContactsActionsContextProvider>
        </ContactsContextProvider>
    )
}

export default Contacts
