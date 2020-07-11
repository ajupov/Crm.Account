import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import ContactChangesContextProvider from '../../contexts/ContactChangesContext/ContactChangesContextProvider'
import ContactChangesFilter from './components/ContactChangesFilter/ContactChangesFilter'
import ContactChangesFilterMobile from './components/ContactChangesFilterMobile/ContactChangesFilterMobile'
import ContactChangesFiltersContextProvider from '../../contexts/ContactChangesFiltersContext/ContactChangesFiltersContextProvider'
import ContactChangesTable from './components/ContactChangesTable/ContactChangesTable'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useContactChangesView from './hooks/useContactChangesView'

// TODO: Move to l10n
const ContactChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useContactChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactChangesContextProvider>
            <ContactChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ClientsMenu />}
                    secondSidebar={<ContactChangesFilter />}
                    secondSidebarMobile={<ContactChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <ContactChangesTable />
                </Page>
            </ContactChangesFiltersContextProvider>
        </ContactChangesContextProvider>
    )
}

export default ContactChanges
