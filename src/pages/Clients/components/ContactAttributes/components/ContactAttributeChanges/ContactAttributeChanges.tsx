import React, { FC, useEffect } from 'react'

import ContactAttributeChangesContextProvider from '../../contexts/ContactAttributeChangesContext/ContactAttributeChangesContextProvider'
import ContactAttributeChangesFilter from './components/ContactAttributeChangesFilter/ContactAttributeChangesFilter'
import ContactAttributeChangesFiltersContextProvider from '../../contexts/ContactAttributeChangesFiltersContext/ContactAttributeChangesFiltersContextProvider'
import ContactAttributeChangesTable from './components/ContactAttributeChangesTable/ContactAttributeChangesTable'
import ContactsAttributeChangesFilterMobile from './components/ContactsAttributeChangesFilterMobile/ContactsAttributeChangesFilterMobile'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useContactAttributeChangesView from './hooks/useContactAttributeChangesView'

// TODO: Move to l10n
const ContactAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useContactAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactAttributeChangesContextProvider>
            <ContactAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ContactsMenu />}
                    secondSidebar={<ContactAttributeChangesFilter />}
                    secondSidebarMobile={<ContactsAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <ContactAttributeChangesTable />
                </Page>
            </ContactAttributeChangesFiltersContextProvider>
        </ContactAttributeChangesContextProvider>
    )
}

export default ContactAttributeChanges
