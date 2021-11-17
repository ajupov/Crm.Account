import React, { FC, useEffect } from 'react'

import ClientsMenu from '../SuppliersMenu/SuppliersMenu'
import Page from '../../../components/common/grids/Page/Page'
import SupplierAttributeContextProvider from './contexts/SupplierAttributeContext/SupplierAttributeContextProvider'
import SupplierAttributeDelete from './components/SupplierAttributeDelete/SupplierAttributeDelete'
import SupplierAttributeRestore from './components/SupplierAttributeRestore/SupplierAttributeRestore'
import SupplierAttributesActionsContextProvider from './contexts/SupplierAttributesActionsContext/SupplierAttributesActionsContextProvider'
import SupplierAttributesContextProvider from './contexts/SupplierAttributesContext/SupplierAttributesContextProvider'
import SupplierAttributesFilter from './components/SupplierAttributesFilter/SupplierAttributesFilter'
import SupplierAttributesFilterMobile from './components/SupplierAttributesFilterMobile/SupplierAttributesFilterMobile'
import SupplierAttributesFiltersContextProvider from './contexts/SupplierAttributesFiltersContext/SupplierAttributesFiltersContextProvider'
import SupplierAttributesTable from './components/SupplierAttributesTable/SupplierAttributesTable'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierAttributes: FC = () => {
    const title = 'Атрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierAttributesContextProvider>
            <SupplierAttributesActionsContextProvider>
                <SupplierAttributesFiltersContextProvider>
                    <SupplierAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<ClientsMenu />}
                            secondSidebar={<SupplierAttributesFilter />}
                            secondSidebarMobile={<SupplierAttributesFilterMobile />}
                        >
                            <SupplierAttributesTable />
                            <SupplierAttributeDelete />
                            <SupplierAttributeRestore />
                        </Page>
                    </SupplierAttributeContextProvider>
                </SupplierAttributesFiltersContextProvider>
            </SupplierAttributesActionsContextProvider>
        </SupplierAttributesContextProvider>
    )
}

export default SupplierAttributes
