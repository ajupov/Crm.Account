import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompanyAttributeContextProvider from '../../contexts/CompanyAttributeContext/CompanyAttributeContextProvider'
import CompanyAttributeEditForm from './CompanyAttributeEditForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <CompanyAttributeEditForm />
            </Page>
        </CompanyAttributeContextProvider>
    )
}

export default CompanyAttributeEdit
