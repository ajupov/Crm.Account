import React, { FC, useEffect } from 'react'

import DealStatusContextProvider from './contexts/DealStatusContext/DealStatusContextProvider'
import DealStatusDelete from './components/DealStatusDelete/DealStatusDelete'
import DealStatusRestore from './components/DealStatusRestore/DealStatusRestore'
import DealStatusesActionsContextProvider from './contexts/DealStatusesActionsContext/DealStatusesActionsContextProvider'
import DealStatusesContextProvider from './contexts/DealStatusesContext/DealStatusesContextProvider'
import DealStatusesFilter from './components/DealStatusesFilter/DealStatusesFilter'
import DealStatusesFiltersContextProvider from './contexts/DealStatusesFiltersContext/DealStatusesFiltersContextProvider'
import DealStatusesTable from './components/DealStatusesTable/DealStatusesTable'
import DealsMenu from '../DealsMenu/DealsMenu'
import DealsStatusesFilterMobile from './components/DealsStatusesFilterMobile/DealsStatusesFilterMobile'
import Page from '../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../helpers/productNameHelper'

// TODO: Move to l10n
const DealStatuses: FC = () => {
    const title = 'Статусы'

    useEffect(() => setPageTitle(title), [])

    return (
        <DealStatusesContextProvider>
            <DealStatusesActionsContextProvider>
                <DealStatusesFiltersContextProvider>
                    <DealStatusContextProvider>
                        <Page
                            title={title}
                            firstSidebar={<DealsMenu />}
                            secondSidebar={<DealStatusesFilter />}
                            secondSidebarMobile={<DealsStatusesFilterMobile />}
                        >
                            <DealStatusesTable />
                            <DealStatusDelete />
                            <DealStatusRestore />
                        </Page>
                    </DealStatusContextProvider>
                </DealStatusesFiltersContextProvider>
            </DealStatusesActionsContextProvider>
        </DealStatusesContextProvider>
    )
}

export default DealStatuses
