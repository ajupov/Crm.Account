import React, { FC, useEffect } from 'react'

import LeadContextProvider from '../../contexts/LeadContext/LeadContextProvider'
import LeadCreateForm from './LeadCreateForm'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadCreate: FC = () => {
    const title = 'Добавление лида'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadContextProvider>
            <Page title={title} firstSidebar={<LeadsMenu />}>
                <LeadCreateForm />
            </Page>
        </LeadContextProvider>
    )
}

export default LeadCreate
