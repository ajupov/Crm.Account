import React, { FC, useEffect } from 'react'

import LeadChangesContextProvider from '../../contexts/LeadChangesContext/LeadChangesContextProvider'
import LeadChangesFilter from './components/LeadChangesFilter/LeadChangesFilter'
import LeadChangesFilterMobile from './components/LeadChangesFilterMobile/LeadChangesFilterMobile'
import LeadChangesFiltersContextProvider from '../../contexts/LeadChangesFiltersContext/LeadChangesFiltersContextProvider'
import LeadChangesTable from './components/LeadChangesTable/LeadChangesTable'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useLeadChangesView from './hooks/useLeadChangesView'

// TODO: Move to l10n
const LeadChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useLeadChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadChangesContextProvider>
            <LeadChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<LeadsMenu />}
                    secondSidebar={<LeadChangesFilter />}
                    secondSidebarMobile={<LeadChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <LeadChangesTable />
                </Page>
            </LeadChangesFiltersContextProvider>
        </LeadChangesContextProvider>
    )
}

export default LeadChanges
