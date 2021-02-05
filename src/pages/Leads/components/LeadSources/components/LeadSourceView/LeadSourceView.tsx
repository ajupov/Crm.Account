import React, { FC, useEffect } from 'react'

import LeadSourceContextProvider from '../../contexts/LeadSourceContext/LeadSourceContextProvider'
import LeadSourceDelete from '../LeadSourceDelete/LeadSourceDelete'
import LeadSourceRestore from '../LeadSourceRestore/LeadSourceRestore'
import LeadSourceViewForm from './LeadSourceViewForm'
import LeadSourcesActionsContextProvider from '../../contexts/LeadSourcesActionsContext/LeadSourcesActionsContextProvider'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadSourceView: FC = () => {
    const title = 'Просмотр источника'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadSourcesActionsContextProvider>
            <LeadSourceContextProvider>
                <Page title={title} firstSidebar={<LeadsMenu />}>
                    <LeadSourceViewForm />
                    <LeadSourceDelete />
                    <LeadSourceRestore />
                </Page>
            </LeadSourceContextProvider>
        </LeadSourcesActionsContextProvider>
    )
}

export default LeadSourceView
