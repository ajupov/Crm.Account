import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompanyAttributeContextProvider from '../../contexts/CompanyAttributeContext/CompanyAttributeContextProvider'
import CompanyAttributeDelete from '../CompanyAttributeDelete/CompanyAttributeDelete'
import CompanyAttributeRestore from '../CompanyAttributeRestore/CompanyAttributeRestore'
import CompanyAttributeViewForm from './CompanyAttributeViewForm'
import CompanyAttributesActionsContextProvider from '../../contexts/CompanyAttributesActionsContext/CompanyAttributesActionsContextProvider'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompanyAttributesActionsContextProvider>
            <CompanyAttributeContextProvider>
                <Page title={title} firstSidebar={<ClientsMenu />}>
                    <CompanyAttributeViewForm />
                    <CompanyAttributeDelete />
                    <CompanyAttributeRestore />
                </Page>
            </CompanyAttributeContextProvider>
        </CompanyAttributesActionsContextProvider>
    )
}

export default CompanyAttributeView
