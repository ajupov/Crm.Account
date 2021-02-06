import React, { FC, useEffect } from 'react'

import DealTypeContextProvider from '../../contexts/DealTypeContext/DealTypeContextProvider'
import DealTypeCreateForm from './DealTypeCreateForm'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealTypeCreate: FC = () => {
    const title = 'Добавление типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealTypeContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealTypeCreateForm />
            </Page>
        </DealTypeContextProvider>
    )
}

export default DealTypeCreate
