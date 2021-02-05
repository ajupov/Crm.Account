import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../LeadsMenu/LeadsMenu'
import LeadAttributeContextProvider from '../../contexts/LeadAttributeContext/LeadAttributeContextProvider'
import LeadAttributeEditForm from './LeadAttributeEditForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <LeadAttributeEditForm />
            </Page>
        </LeadAttributeContextProvider>
    )
}

export default LeadAttributeEdit
