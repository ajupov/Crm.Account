import React, { FC, useEffect } from 'react'

import DealAttributeContextProvider from '../../contexts/DealAttributeContext/DealAttributeContextProvider'
import DealAttributeEditForm from './DealAttributeEditForm'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealAttributeContextProvider>
            <Page title={title} firstSidebar={<DealsMenu />}>
                <DealAttributeEditForm />
            </Page>
        </DealAttributeContextProvider>
    )
}

export default DealAttributeEdit
