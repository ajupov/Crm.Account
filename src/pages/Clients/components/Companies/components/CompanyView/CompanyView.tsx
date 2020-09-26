import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../ClientsMenu/ClientsMenu'
import CompaniesActionsContextProvider from '../../contexts/CompaniesActionsContext/CompaniesActionsContextProvider'
import CompanyCommentContextProvider from '../../contexts/CompanyCommentContext/CompanyCommentContextProvider'
import CompanyComments from '../CompanyComments/CompanyComments'
import CompanyCommentsContextProvider from '../../contexts/CompanyCommentsContext/CompanyCommentsContextProvider'
import CompanyContextProvider from '../../contexts/CompanyContext/CompanyContextProvider'
import CompanyDelete from '../CompanyDelete/CompanyDelete'
import CompanyRestore from '../CompanyRestore/CompanyRestore'
import CompanyViewForm from './CompanyViewForm'
import Page from '../../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const CompanyView: FC = () => {
    const title = 'Просмотр компании'

    useEffect(() => setPageTitle(title), [])

    return (
        <CompaniesActionsContextProvider>
            <CompanyContextProvider>
                <CompanyCommentsContextProvider>
                    <CompanyCommentContextProvider>
                        <Page title={title} firstSidebar={<ClientsMenu />}>
                            <CompanyViewForm />
                            <CompanyComments />
                            <CompanyDelete />
                            <CompanyRestore />
                        </Page>
                    </CompanyCommentContextProvider>
                </CompanyCommentsContextProvider>
            </CompanyContextProvider>
        </CompaniesActionsContextProvider>
    )
}

export default CompanyView
