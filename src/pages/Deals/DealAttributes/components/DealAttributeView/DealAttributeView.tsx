import React, { FC, useEffect } from 'react'

import DealAttributeContextProvider from '../../contexts/DealAttributeContext/DealAttributeContextProvider'
import DealAttributeDelete from '../DealAttributeDelete/DealAttributeDelete'
import DealAttributeRestore from '../DealAttributeRestore/DealAttributeRestore'
import DealAttributeViewForm from './DealAttributeViewForm'
import DealAttributesActionsContextProvider from '../../contexts/DealAttributesActionsContext/DealAttributesActionsContextProvider'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealAttributesActionsContextProvider>
            <DealAttributeContextProvider>
                <Page title={title} firstSidebar={<DealsMenu />}>
                    <DealAttributeViewForm />
                    <DealAttributeDelete />
                    <DealAttributeRestore />
                </Page>
            </DealAttributeContextProvider>
        </DealAttributesActionsContextProvider>
    )
}

export default DealAttributeView
