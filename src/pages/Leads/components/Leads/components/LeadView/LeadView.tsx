import React, { FC, useEffect } from 'react'

import LeadCommentContextProvider from '../../contexts/LeadCommentContext/LeadCommentContextProvider'
import LeadComments from '../LeadComments/LeadComments'
import LeadCommentsContextProvider from '../../contexts/LeadCommentsContext/LeadCommentsContextProvider'
import LeadContextProvider from '../../contexts/LeadContext/LeadContextProvider'
import LeadDelete from '../LeadDelete/LeadDelete'
import LeadRestore from '../LeadRestore/LeadRestore'
import LeadViewForm from './LeadViewForm'
import LeadsActionsContextProvider from '../../contexts/LeadsActionsContext/LeadsActionsContextProvider'
import LeadsMenu from '../../../LeadsMenu/LeadsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const LeadView: FC = () => {
    const title = 'Просмотр лида'

    useEffect(() => setPageTitle(title), [])

    return (
        <LeadsActionsContextProvider>
            <LeadContextProvider>
                <LeadCommentsContextProvider>
                    <LeadCommentContextProvider>
                        <Page title={title} firstSidebar={<LeadsMenu />}>
                            <LeadViewForm />
                            <LeadComments />
                            <LeadDelete />
                            <LeadRestore />
                        </Page>
                    </LeadCommentContextProvider>
                </LeadCommentsContextProvider>
            </LeadContextProvider>
        </LeadsActionsContextProvider>
    )
}

export default LeadView
