import React, { FC, useEffect } from 'react'

import ClientsMenu from '../ClientsMenu/ClientsMenu'
import CompanyAttributeContextProvider from './contexts/CompanyAttributeContext/CompanyAttributeContextProvider'
import CompanyAttributeDelete from './components/CompanyAttributeDelete/CompanyAttributeDelete'
import CompanyAttributeRestore from './components/CompanyAttributeRestore/CompanyAttributeRestore'
import CompanyAttributesActionsContextProvider from './contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContextProvider'
import CompanyAttributesContextProvider from './contexts/CompanyAttributesContext/CompanyAttributesContextProvider'
import CompanyAttributesFilter from './components/CompanyAttributesFilter/CompanyAttributesFilter'
import CompanyAttributesFilterMobile from './components/CompanyAttributesFilterMobile/CompanyAttributesFilterMobile'
import CompanyAttributesFiltersContextProvider from './contexts/CompanyAttributesFiltersContext/CompanyAttributesFiltersContextProvider'
import CompanyAttributesTable from './components/CompanyAttributesTable/CompanyAttributesTable'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyAttributes: FC = () => {
    const title = 'Аттрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyAttributesContextProvider>
            <CompanyAttributesActionsContextProvider>
                <CompanyAttributesFiltersContextProvider>
                    <CompanyAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ClientsMenu />}
                            secondSidebar={<CompanyAttributesFilter />}
                            secondSidebarMobile={<CompanyAttributesFilterMobile />}
                        >
                            <CompanyAttributesTable />
                            <CompanyAttributeDelete />
                            <CompanyAttributeRestore />
                        </Page>
                    </CompanyAttributeContextProvider>
                </CompanyAttributesFiltersContextProvider>
            </CompanyAttributesActionsContextProvider>
        </CompanyAttributesContextProvider>
    )
}

export default CompanyAttributes
