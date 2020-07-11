import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompanyAttributeContextProvider from '../../contexts/CompanyAttributeContext/CompanyAttributeContextProvider'
import CompanyAttributeCreateForm from './CompanyAttributeCreateForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <CompanyAttributeCreateForm />
            </Page>
        </CompanyAttributeContextProvider>
    )
}

export default CompanyAttributeCreate
