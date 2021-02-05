import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../LeadsMenu/LeadsMenu'
import LeadAttributeChangesContextProvider from '../../contexts/LeadAttributeChangesContext/LeadAttributeChangesContextProvider'
import LeadAttributeChangesFilter from './components/LeadAttributeChangesFilter/LeadAttributeChangesFilter'
import LeadAttributeChangesFiltersContextProvider from '../../contexts/LeadAttributeChangesFiltersContext/LeadAttributeChangesFiltersContextProvider'
import LeadAttributeChangesTable from './components/LeadAttributeChangesTable/LeadAttributeChangesTable'
import LeadsAttributeChangesFilterMobile from './components/LeadsAttributeChangesFilterMobile/LeadsAttributeChangesFilterMobile'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useLeadAttributeChangesView from './hooks/useLeadAttributeChangesView'

// TODO: Move to l10n
const LeadAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useLeadAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadAttributeChangesContextProvider>
            <LeadAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ClientsMenu />}
                    secondSidebar={<LeadAttributeChangesFilter />}
                    secondSidebarMobile={<LeadsAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <LeadAttributeChangesTable />
                </Page>
            </LeadAttributeChangesFiltersContextProvider>
        </LeadAttributeChangesContextProvider>
    )
}

export default LeadAttributeChanges
