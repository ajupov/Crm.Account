import React, { FC, useEffect } from 'react'

import DealAttributeContextProvider from './contexts/DealAttributeContext/DealAttributeContextProvider'
import DealAttributeDelete from './components/DealAttributeDelete/DealAttributeDelete'
import DealAttributeRestore from './components/DealAttributeRestore/DealAttributeRestore'
import DealAttributesActionsContextProvider from './contexts/DealAttributesActionsContext/DealAttributesActionsContextProvider'
import DealAttributesContextProvider from './contexts/DealAttributesContext/DealAttributesContextProvider'
import DealAttributesFilter from './components/DealAttributesFilter/DealAttributesFilter'
import DealAttributesFiltersContextProvider from './contexts/DealAttributesFiltersContext/DealAttributesFiltersContextProvider'
import DealAttributesTable from './components/DealAttributesTable/DealAttributesTable'
import DealsAttributesFilterMobile from './components/DealsAttributesFilterMobile/DealsAttributesFilterMobile'
import DealsMenu from '../DealsMenu/DealsMenu'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealAttributes: FC = () => {
    const title = 'Аттрибуты'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealAttributesContextProvider>
            <DealAttributesActionsContextProvider>
                <DealAttributesFiltersContextProvider>
                    <DealAttributeContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<DealsMenu />}
                            secondSidebar={<DealAttributesFilter />}
                            secondSidebarMobile={<DealsAttributesFilterMobile />}
                        >
                            <DealAttributesTable />
                            <DealAttributeDelete />
                            <DealAttributeRestore />
                        </Page>
                    </DealAttributeContextProvider>
                </DealAttributesFiltersContextProvider>
            </DealAttributesActionsContextProvider>
        </DealAttributesContextProvider>
    )
}

export default DealAttributes
