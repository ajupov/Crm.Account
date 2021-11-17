import React, { FC, useEffect } from 'react'

import Page from '../../../components/common/grids/Page/Page'
import SupplierContextProvider from './contexts/SupplierContext/SupplierContextProvider'
import SupplierDelete from './components/SupplierDelete/SupplierDelete'
import SupplierRestore from './components/SupplierRestore/SupplierRestore'
import SuppliersActionsContextProvider from './contexts/SuppliersActionsContext/SuppliersActionsContextProvider'
import SuppliersContextProvider from './contexts/SuppliersContext/SuppliersContextProvider'
import SuppliersFilter from './components/SuppliersFilter/SuppliersFilter'
import SuppliersFilterMobile from './components/SuppliersFilterMobile/SuppliersFilterMobile'
import SuppliersFiltersContextProvider from './contexts/SuppliersFiltersContext/SuppliersFiltersContextProvider'
import SuppliersMenu from '../SuppliersMenu/SuppliersMenu'
import SuppliersTable from './components/SuppliersTable/SuppliersTable'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const Suppliers: FC = () => {
    const title = 'Поставщики'

    useEffect(() => setPageTitle(title), [])

    return (
        <SuppliersContextProvider>
            <SuppliersActionsContextProvider>
                <SuppliersFiltersContextProvider>
                    <SupplierContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<SuppliersMenu />}
                            secondSidebar={<SuppliersFilter />}
                            secondSidebarMobile={<SuppliersFilterMobile />}
                        >
                            <SuppliersTable />
                            <SupplierDelete />
                            <SupplierRestore />
                        </Page>
                    </SupplierContextProvider>
                </SuppliersFiltersContextProvider>
            </SuppliersActionsContextProvider>
        </SuppliersContextProvider>
    )
}

export default Suppliers
