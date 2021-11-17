import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import SupplierContextProvider from '../../contexts/SupplierContext/SupplierContextProvider'
import SupplierCreateForm from './SupplierCreateForm'
import SuppliersMenu from '../../../SuppliersMenu/SuppliersMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierCreate: FC = () => {
    const title = 'Добавление поставщика'

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierContextProvider>
            <Page title={title} firstSidebar={<SuppliersMenu />}>
                <SupplierCreateForm />
            </Page>
        </SupplierContextProvider>
    )
}

export default SupplierCreate
