import React, { FC, useEffect } from 'react'

import LeadSourceContextProvider from '../../contexts/LeadSourceContext/LeadSourceContextProvider'
import LeadSourceEditForm from './LeadSourceEditForm'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadSourceEdit: FC = () => {
    const title = 'Изменение источника'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadSourceContextProvider>
            <Page title={title} firstSidebar={<LeadsMenu />}>
                <LeadSourceEditForm />
            </Page>
        </LeadSourceContextProvider>
    )
}

export default LeadSourceEdit
