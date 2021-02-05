import React, { FC, useEffect } from 'react'

import LeadSourceChangesContextProvider from '../../contexts/LeadSourceChangesContext/LeadSourceChangesContextProvider'
import LeadSourceChangesFilter from './components/LeadSourceChangesFilter/LeadSourceChangesFilter'
import LeadSourceChangesFiltersContextProvider from '../../contexts/LeadSourceChangesFiltersContext/LeadSourceChangesFiltersContextProvider'
import LeadSourceChangesTable from './components/LeadSourceChangesTable/LeadSourceChangesTable'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import LeadsSourceChangesFilterMobile from './components/LeadsSourceChangesFilterMobile/LeadsSourceChangesFilterMobile'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useLeadSourceChangesView from './hooks/useLeadSourceChangesView'

// TODO: Move to l10n
const LeadSourceChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useLeadSourceChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadSourceChangesContextProvider>
            <LeadSourceChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<LeadsMenu />}
                    secondSidebar={<LeadSourceChangesFilter />}
                    secondSidebarMobile={<LeadsSourceChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <LeadSourceChangesTable />
                </Page>
            </LeadSourceChangesFiltersContextProvider>
        </LeadSourceChangesContextProvider>
    )
}

export default LeadSourceChanges
