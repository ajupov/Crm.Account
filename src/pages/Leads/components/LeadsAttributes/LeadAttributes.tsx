import React, { FC, useEffect } from 'react'

import ClientsMenu from '../LeadsMenu/LeadsMenu'
import LeadAttributeContextProvider from './contexts/LeadAttributeContext/LeadAttributeContextProvider'
import LeadAttributeDelete from './components/LeadAttributeDelete/LeadAttributeDelete'
import LeadAttributeRestore from './components/LeadAttributeRestore/LeadAttributeRestore'
import LeadAttributesActionsContextProvider from './contexts/LeadAttributesActionsContext/LeadAttributesActionsContextProvider'
import LeadAttributesContextProvider from './contexts/LeadAttributesContext/LeadAttributesContextProvider'
import LeadAttributesFilter from './components/LeadAttributesFilter/LeadAttributesFilter'
import LeadAttributesFilterMobile from './components/LeadAttributesFilterMobile/LeadAttributesFilterMobile'
import LeadAttributesFiltersContextProvider from './contexts/LeadAttributesFiltersContext/LeadAttributesFiltersContextProvider'
import LeadAttributesTable from './components/LeadAttributesTable/LeadAttributesTable'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadAttributes: FC = () => {
    const title = 'Аттрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadAttributesContextProvider>
            <LeadAttributesActionsContextProvider>
                <LeadAttributesFiltersContextProvider>
                    <LeadAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ClientsMenu />}
                            secondSidebar={<LeadAttributesFilter />}
                            secondSidebarMobile={<LeadAttributesFilterMobile />}
                        >
                            <LeadAttributesTable />
                            <LeadAttributeDelete />
                            <LeadAttributeRestore />
                        </Page>
                    </LeadAttributeContextProvider>
                </LeadAttributesFiltersContextProvider>
            </LeadAttributesActionsContextProvider>
        </LeadAttributesContextProvider>
    )
}

export default LeadAttributes
