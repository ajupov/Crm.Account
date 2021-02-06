import React, { FC, useEffect } from 'react'

import DealAttributeContextProvider from '../../contexts/DealAttributeContext/DealAttributeContextProvider'
import DealAttributeCreateForm from './DealAttributeCreateForm'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealAttributeContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealAttributeCreateForm />
            </Page>
        </DealAttributeContextProvider>
    )
}

export default DealAttributeCreate
