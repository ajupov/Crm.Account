import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../SuppliersMenu/SuppliersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import SupplierAttributeContextProvider from '../../contexts/SupplierAttributeContext/SupplierAttributeContextProvider'
import SupplierAttributeEditForm from './SupplierAttributeEditForm'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierAttributeEdit: FC = () => {
    const title = 'Изменение атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <SupplierAttributeEditForm />
            </Page>
        </SupplierAttributeContextProvider>
    )
}

export default SupplierAttributeEdit
