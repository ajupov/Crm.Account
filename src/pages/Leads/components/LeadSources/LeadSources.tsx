import React, { FC, useEffect } from 'react'

import LeadSourceContextProvider from './contexts/LeadSourceContext/LeadSourceContextProvider'
import LeadSourceDelete from './components/LeadSourceDelete/LeadSourceDelete'
import LeadSourceRestore from './components/LeadSourceRestore/LeadSourceRestore'
import LeadSourcesActionsContextProvider from './contexts/LeadSourcesActionsContext/LeadSourcesActionsContextProvider'
import LeadSourcesContextProvider from './contexts/LeadSourcesContext/LeadSourcesContextProvider'
import LeadSourcesFilter from './components/LeadSourcesFilter/LeadSourcesFilter'
import LeadSourcesFilterMobile from './components/LeadSourcesFilterMobile/LeadSourcesFilterMobile'
import LeadSourcesFiltersContextProvider from './contexts/LeadSourcesFiltersContext/LeadSourcesFiltersContextProvider'
import LeadSourcesTable from './components/LeadSourcesTable/LeadSourcesTable'
import LeadsMenu from '../LeadsMenu/LeadsMenu'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadSources: FC = () => {
    const title = 'Источники'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadSourcesContextProvider>
            <LeadSourcesActionsContextProvider>
                <LeadSourcesFiltersContextProvider>
                    <LeadSourceContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<LeadsMenu />}
                            secondSidebar={<LeadSourcesFilter />}
                            secondSidebarMobile={<LeadSourcesFilterMobile />}
                        >
                            <LeadSourcesTable />
                            <LeadSourceDelete />
                            <LeadSourceRestore />
                        </Page>
                    </LeadSourceContextProvider>
                </LeadSourcesFiltersContextProvider>
            </LeadSourcesActionsContextProvider>
        </LeadSourcesContextProvider>
    )
}

export default LeadSources
