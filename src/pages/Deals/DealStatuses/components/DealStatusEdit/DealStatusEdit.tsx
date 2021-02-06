import React, { FC, useEffect } from 'react'

import DealStatusContextProvider from '../../contexts/DealStatusContext/DealStatusContextProvider'
import DealStatusEditForm from './DealStatusEditForm'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealStatusEdit: FC = () => {
    const title = 'Изменение статуса'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealStatusContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealStatusEditForm />
            </Page>
        </DealStatusContextProvider>
    )
}

export default DealStatusEdit
