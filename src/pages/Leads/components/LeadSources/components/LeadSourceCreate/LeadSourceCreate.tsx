import React, { FC, useEffect } from 'react'

import LeadSourceContextProvider from '../../contexts/LeadSourceContext/LeadSourceContextProvider'
import LeadSourceCreateForm from './LeadSourceCreateForm'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadSourceCreate: FC = () => {
    const title = 'Добавление источника'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadSourceContextProvider>
            <Page title={title} firstSidebar={<LeadsMenu />}>
                <LeadSourceCreateForm />
            </Page>
        </LeadSourceContextProvider>
    )
}

export default LeadSourceCreate
