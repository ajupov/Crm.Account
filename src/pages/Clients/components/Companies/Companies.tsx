import React, { FC, useEffect } from 'react'

import ClientsMenu from '../ClientsMenu/ClientsMenu'
import CompaniesActionsContextProvider from './contexts/CompaniesActionsContext/CompaniesActionsContextProvider'
import CompaniesContextProvider from './contexts/CompaniesContext/CompaniesContextProvider'
import CompaniesFilter from './components/CompaniesFilter/CompaniesFilter'
import CompaniesFilterMobile from './components/CompaniesFilterMobile/CompaniesFilterMobile'
import CompaniesFiltersContextProvider from './contexts/CompaniesFiltersContext/CompaniesFiltersContextProvider'
import CompaniesTable from './components/CompaniesTable/CompaniesTable'
import CompanyContextProvider from './contexts/CompanyContext/CompanyContextProvider'
import CompanyDelete from './components/CompanyDelete/CompanyDelete'
import CompanyRestore from './components/CompanyRestore/CompanyRestore'
import Page from '../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../helpers/productNameHelper'

// TODO: Move to l10n
const Companies: FC = () => {
    const title = 'Компании'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompaniesContextProvider>
            <CompaniesActionsContextProvider>
                <CompaniesFiltersContextProvider>
                    <CompanyContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ClientsMenu />}
                            secondSidebar={<CompaniesFilter />}
                            secondSidebarMobile={<CompaniesFilterMobile />}
                        >
                            <CompaniesTable />
                            <CompanyDelete />
                            <CompanyRestore />
                        </Page>
                    </CompanyContextProvider>
                </CompaniesFiltersContextProvider>
            </CompaniesActionsContextProvider>
        </CompaniesContextProvider>
    )
}

export default Companies
