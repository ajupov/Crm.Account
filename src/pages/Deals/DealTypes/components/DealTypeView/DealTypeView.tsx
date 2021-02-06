import React, { FC, useEffect } from 'react'

import DealTypeContextProvider from '../../contexts/DealTypeContext/DealTypeContextProvider'
import DealTypeDelete from '../DealTypeDelete/DealTypeDelete'
import DealTypeRestore from '../DealTypeRestore/DealTypeRestore'
import DealTypeViewForm from './DealTypeViewForm'
import DealTypesActionsContextProvider from '../../contexts/DealTypesActionsContext/DealTypesActionsContextProvider'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealTypeView: FC = () => {
    const title = 'Просмотр типа'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealTypesActionsContextProvider>
            <DealTypeContextProvider>
                <Page title={title} firstSidebar={<DealsMenu />}>
                    <DealTypeViewForm />
                    <DealTypeDelete />
                    <DealTypeRestore />
                </Page>
            </DealTypeContextProvider>
        </DealTypesActionsContextProvider>
    )
}

export default DealTypeView
