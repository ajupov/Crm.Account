import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../LeadsMenu/LeadsMenu'
import LeadAttributeContextProvider from '../../contexts/LeadAttributeContext/LeadAttributeContextProvider'
import LeadAttributeDelete from '../LeadAttributeDelete/LeadAttributeDelete'
import LeadAttributeRestore from '../LeadAttributeRestore/LeadAttributeRestore'
import LeadAttributeViewForm from './LeadAttributeViewForm'
import LeadAttributesActionsContextProvider from '../../contexts/LeadAttributesActionsContext/LeadAttributesActionsContextProvider'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadAttributesActionsContextProvider>
            <LeadAttributeContextProvider>
                <Page title={title} firstSidebar={<ClientsMenu />}>
                    <LeadAttributeViewForm />
                    <LeadAttributeDelete />
                    <LeadAttributeRestore />
                </Page>
            </LeadAttributeContextProvider>
        </LeadAttributesActionsContextProvider>
    )
}

export default LeadAttributeView
