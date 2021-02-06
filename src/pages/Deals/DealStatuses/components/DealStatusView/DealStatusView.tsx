import React, { FC, useEffect } from 'react'

import DealStatusContextProvider from '../../contexts/DealStatusContext/DealStatusContextProvider'
import DealStatusDelete from '../DealStatusDelete/DealStatusDelete'
import DealStatusRestore from '../DealStatusRestore/DealStatusRestore'
import DealStatusViewForm from './DealStatusViewForm'
import DealStatusesActionsContextProvider from '../../contexts/DealStatusesActionsContext/DealStatusesActionsContextProvider'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealStatusView: FC = () => {
    const title = 'Просмотр статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealStatusesActionsContextProvider>
            <DealStatusContextProvider>
                <Page title={title} firstSidebar={<DealsMenu />}>
                    <DealStatusViewForm />
                    <DealStatusDelete />
                    <DealStatusRestore />
                </Page>
            </DealStatusContextProvider>
        </DealStatusesActionsContextProvider>
    )
}

export default DealStatusView
