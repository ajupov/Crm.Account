import React, { FC, useEffect } from 'react'

import LeadContextProvider from './contexts/LeadContext/LeadContextProvider'
import LeadDelete from './components/LeadDelete/LeadDelete'
import LeadRestore from './components/LeadRestore/LeadRestore'
import LeadsActionsContextProvider from './contexts/LeadsActionsContext/LeadsActionsContextProvider'
import LeadsContextProvider from './contexts/LeadsContext/LeadsContextProvider'
import LeadsFilter from './components/LeadsFilter/LeadsFilter'
import LeadsFilterMobile from './components/LeadsFilterMobile/LeadsFilterMobile'
import LeadsFiltersContextProvider from './contexts/LeadsFiltersContext/LeadsFiltersContextProvider'
import LeadsMenu from '../LeadsMenu/LeadsMenu'
import LeadsTable from './components/LeadsTable/LeadsTable'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const Leads: FC = () => {
    const title = 'Лиды'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadsContextProvider>
            <LeadsActionsContextProvider>
                <LeadsFiltersContextProvider>
                    <LeadContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<LeadsMenu />}
                            secondSidebar={<LeadsFilter />}
                            secondSidebarMobile={<LeadsFilterMobile />}
                        >
                            <LeadsTable />
                            <LeadDelete />
                            <LeadRestore />
                        </Page>
                    </LeadContextProvider>
                </LeadsFiltersContextProvider>
            </LeadsActionsContextProvider>
        </LeadsContextProvider>
    )
}

export default Leads
