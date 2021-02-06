import React, { FC, useEffect } from 'react'

import DealTypeContextProvider from './contexts/DealTypeContext/DealTypeContextProvider'
import DealTypeDelete from './components/DealTypeDelete/DealTypeDelete'
import DealTypeRestore from './components/DealTypeRestore/DealTypeRestore'
import DealTypesActionsContextProvider from './contexts/DealTypesActionsContext/DealTypesActionsContextProvider'
import DealTypesContextProvider from './contexts/DealTypesContext/DealTypesContextProvider'
import DealTypesFilter from './components/DealTypesFilter/DealTypesFilter'
import DealTypesFilterMobile from './components/DealTypesFilterMobile/DealTypesFilterMobile'
import DealTypesFiltersContextProvider from './contexts/DealTypesFiltersContext/DealTypesFiltersContextProvider'
import DealTypesTable from './components/DealTypesTable/DealTypesTable'
import DealsMenu from '../DealsMenu/DealsMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealTypes: FC = () => {
    const title = 'Типы'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealTypesContextProvider>
            <DealTypesActionsContextProvider>
                <DealTypesFiltersContextProvider>
                    <DealTypeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<DealsMenu />}
                            secondSidebar={<DealTypesFilter />}
                            secondSidebarMobile={<DealTypesFilterMobile />}
                        >
                            <DealTypesTable />
                            <DealTypeDelete />
                            <DealTypeRestore />
                        </Page>
                    </DealTypeContextProvider>
                </DealTypesFiltersContextProvider>
            </DealTypesActionsContextProvider>
        </DealTypesContextProvider>
    )
}

export default DealTypes
