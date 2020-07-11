import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompanyContextProvider from '../../contexts/CompanyContext/CompanyContextProvider'
import CompanyCreateForm from './CompanyCreateForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyCreate: FC = () => {
    const title = 'Добавление контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <CompanyCreateForm />
            </Page>
        </CompanyContextProvider>
    )
}

export default CompanyCreate
