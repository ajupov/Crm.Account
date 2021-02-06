import React, { FC, useEffect } from 'react'

import DealStatusContextProvider from '../../contexts/DealStatusContext/DealStatusContextProvider'
import DealStatusCreateForm from './DealStatusCreateForm'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealStatusCreate: FC = () => {
    const title = 'Добавление статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealStatusContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealStatusCreateForm />
            </Page>
        </DealStatusContextProvider>
    )
}

export default DealStatusCreate
