import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../LeadsMenu/LeadsMenu'
import LeadAttributeContextProvider from '../../contexts/LeadAttributeContext/LeadAttributeContextProvider'
import LeadAttributeCreateForm from './LeadAttributeCreateForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <LeadAttributeCreateForm />
            </Page>
        </LeadAttributeContextProvider>
    )
}

export default LeadAttributeCreate
