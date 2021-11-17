import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../SuppliersMenu/SuppliersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import SupplierAttributeContextProvider from '../../contexts/SupplierAttributeContext/SupplierAttributeContextProvider'
import SupplierAttributeDelete from '../SupplierAttributeDelete/SupplierAttributeDelete'
import SupplierAttributeRestore from '../SupplierAttributeRestore/SupplierAttributeRestore'
import SupplierAttributeViewForm from './SupplierAttributeViewForm'
import SupplierAttributesActionsContextProvider from '../../contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContextProvider'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierAttributeView: FC = () => {
    const title = 'Просмотр атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierAttributesActionsContextProvider>
            <SupplierAttributeContextProvider>
                <Page title={title} firstSidebar={<ClientsMenu />}>
                    <SupplierAttributeViewForm />
                    <SupplierAttributeDelete />
                    <SupplierAttributeRestore />
                </Page>
            </SupplierAttributeContextProvider>
        </SupplierAttributesActionsContextProvider>
    )
}

export default SupplierAttributeView
