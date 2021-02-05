import React, { FC, useEffect } from 'react'

import LeadContextProvider from '../../contexts/LeadContext/LeadContextProvider'
import LeadEditForm from './LeadEditForm'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadEdit: FC = () => {
    const title = 'Изменение лида'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadContextProvider>
            <Page title={title} firstSidebar={<LeadsMenu />}>
                <LeadEditForm />
            </Page>
        </LeadContextProvider>
    )
}

export default LeadEdit
