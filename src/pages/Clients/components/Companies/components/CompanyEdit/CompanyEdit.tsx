import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompanyContextProvider from '../../contexts/CompanyContext/CompanyContextProvider'
import CompanyEditForm from './CompanyEditForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyEdit: FC = () => {
    const title = 'Изменение контакта'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <CompanyEditForm />
            </Page>
        </CompanyContextProvider>
    )
}

export default CompanyEdit
