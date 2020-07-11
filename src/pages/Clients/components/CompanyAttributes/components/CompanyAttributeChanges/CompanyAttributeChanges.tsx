import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompaniesAttributeChangesFilterMobile from './components/CompaniesAttributeChangesFilterMobile/CompaniesAttributeChangesFilterMobile'
import CompanyAttributeChangesContextProvider from '../../contexts/CompanyAttributeChangesContext/CompanyAttributeChangesContextProvider'
import CompanyAttributeChangesFilter from './components/CompanyAttributeChangesFilter/CompanyAttributeChangesFilter'
import CompanyAttributeChangesFiltersContextProvider from '../../contexts/CompanyAttributeChangesFiltersContext/CompanyAttributeChangesFiltersContextProvider'
import CompanyAttributeChangesTable from './components/CompanyAttributeChangesTable/CompanyAttributeChangesTable'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'
import useCompanyAttributeChangesView from './hooks/useCompanyAttributeChangesView'

// TODO: Move to l10n
const CompanyAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useCompanyAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyAttributeChangesContextProvider>
            <CompanyAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ClientsMenu />}
                    secondSidebar={<CompanyAttributeChangesFilter />}
                    secondSidebarMobile={<CompaniesAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <CompanyAttributeChangesTable />
                </Page>
            </CompanyAttributeChangesFiltersContextProvider>
        </CompanyAttributeChangesContextProvider>
    )
}

export default CompanyAttributeChanges
