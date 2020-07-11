import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompaniesActionsContextProvider from '../../contexts/CompaniesActionsContext/CompaniesActionsContextProvider'
import CompanyContextProvider from '../../contexts/CompanyContext/CompanyContextProvider'
import CompanyDelete from '../CompanyDelete/CompanyDelete'
import CompanyRestore from '../CompanyRestore/CompanyRestore'
import CompanyViewForm from './CompanyViewForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyView: FC = () => {
    const title = 'Просмотр контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompaniesActionsContextProvider>
            <CompanyContextProvider>
                <Page title={title} firstSidebar={<ClientsMenu />}>
                    <CompanyViewForm />
                    <CompanyDelete />
                    <CompanyRestore />
                </Page>
            </CompanyContextProvider>
        </CompaniesActionsContextProvider>
    )
}

export default CompanyView
