import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../SuppliersMenu/SuppliersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import SupplierAttributeContextProvider from '../../contexts/SupplierAttributeContext/SupplierAttributeContextProvider'
import SupplierAttributeCreateForm from './SupplierAttributeCreateForm'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierAttributeCreate: FC = () => {
    const title = 'Добавление атрибута'

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierAttributeContextProvider>
            <Page title={title} firstSidebar={<ClientsMenu />}>
                <SupplierAttributeCreateForm />
            </Page>
        </SupplierAttributeContextProvider>
    )
}

export default SupplierAttributeCreate
