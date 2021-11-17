import React, { FC, useEffect } from 'react'

import ClientsMenu from '../../../SuppliersMenu/SuppliersMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import SupplierAttributeChangesContextProvider from '../../contexts/SupplierAttributeChangesContext/SupplierAttributeChangesContextProvider'
import SupplierAttributeChangesFilter from './components/SupplierAttributeChangesFilter/SupplierAttributeChangesFilter'
import SupplierAttributeChangesFiltersContextProvider from '../../contexts/SupplierAttributeChangesFiltersContext/SupplierAttributeChangesFiltersContextProvider'
import SupplierAttributeChangesTable from './components/SupplierAttributeChangesTable/SupplierAttributeChangesTable'
import SuppliersAttributeChangesFilterMobile from './components/SuppliersAttributeChangesFilterMobile/SuppliersAttributeChangesFilterMobile'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useSupplierAttributeChangesView from './hooks/useSupplierAttributeChangesView'

// TODO: Move to l10n
const SupplierAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useSupplierAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierAttributeChangesContextProvider>
            <SupplierAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<ClientsMenu />}
                    secondSidebar={<SupplierAttributeChangesFilter />}
                    secondSidebarMobile={<SuppliersAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <SupplierAttributeChangesTable />
                </Page>
            </SupplierAttributeChangesFiltersContextProvider>
        </SupplierAttributeChangesContextProvider>
    )
}

export default SupplierAttributeChanges
