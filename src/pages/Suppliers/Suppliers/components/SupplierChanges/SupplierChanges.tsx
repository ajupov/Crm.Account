import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import SupplierChangesContextProvider from '../../contexts/SupplierChangesContext/SupplierChangesContextProvider'
import SupplierChangesFilter from './components/SupplierChangesFilter/SupplierChangesFilter'
import SupplierChangesFilterMobile from './components/SupplierChangesFilterMobile/SupplierChangesFilterMobile'
import SupplierChangesFiltersContextProvider from '../../contexts/SupplierChangesFiltersContext/SupplierChangesFiltersContextProvider'
import SupplierChangesTable from './components/SupplierChangesTable/SupplierChangesTable'
import SuppliersMenu from '../../../SuppliersMenu/SuppliersMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useSupplierChangesView from './hooks/useSupplierChangesView'

// TODO: Move to l10n
const SupplierChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useSupplierChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <SupplierChangesContextProvider>
            <SupplierChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<SuppliersMenu />}
                    secondSidebar={<SupplierChangesFilter />}
                    secondSidebarMobile={<SupplierChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <SupplierChangesTable />
                </Page>
            </SupplierChangesFiltersContextProvider>
        </SupplierChangesContextProvider>
    )
}

export default SupplierChanges
