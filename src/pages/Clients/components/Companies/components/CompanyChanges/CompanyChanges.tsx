import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompanyChangesContextProvider from '../../contexts/CompanyChangesContext/CompanyChangesContextProvider'
import CompanyChangesFilter from './components/CompanyChangesFilter/CompanyChangesFilter'
import CompanyChangesFilterMobile from './components/CompanyChangesFilterMobile/CompanyChangesFilterMobile'
import CompanyChangesFiltersContextProvider from '../../contexts/CompanyChangesFiltersContext/CompanyChangesFiltersContextProvider'
import CompanyChangesTable from './components/CompanyChangesTable/CompanyChangesTable'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useCompanyChangesView from './hooks/useCompanyChangesView'

// TODO: Move to l10n
const CompanyChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useCompanyChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyChangesContextProvider>
            <CompanyChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ClientsMenu />}
                    secondSidebar={<CompanyChangesFilter />}
                    secondSidebarMobile={<CompanyChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <CompanyChangesTable />
                </Page>
            </CompanyChangesFiltersContextProvider>
        </CompanyChangesContextProvider>
    )
}

export default CompanyChanges
