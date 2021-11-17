import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import SupplierContextProvider from '../../contexts/SupplierContext/SupplierContextProvider'
import SupplierEditForm from './SupplierEditForm'
import SuppliersMenu from '../../../SuppliersMenu/SuppliersMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierEdit: FC = () => {
    const title = 'Изменение поставщика'

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierContextProvider>
            <Page title={title} firstSidebar={<SuppliersMenu />}>
                <SupplierEditForm />
            </Page>
        </SupplierContextProvider>
    )
}

export default SupplierEdit
