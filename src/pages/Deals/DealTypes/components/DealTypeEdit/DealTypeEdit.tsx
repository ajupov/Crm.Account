import React, { FC, useEffect } from 'react'

import DealTypeContextProvider from '../../contexts/DealTypeContext/DealTypeContextProvider'
import DealTypeEditForm from './DealTypeEditForm'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealTypeEdit: FC = () => {
    const title = 'Изменение типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealTypeContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealTypeEditForm />
            </Page>
        </DealTypeContextProvider>
    )
}

export default DealTypeEdit
