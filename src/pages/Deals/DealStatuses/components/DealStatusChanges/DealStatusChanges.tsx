import React, { FC, useEffect } from 'react'

import DealStatusChangesContextProvider from '../../contexts/DealStatusChangesContext/DealStatusChangesContextProvider'
import DealStatusChangesFilter from './components/DealStatusChangesFilter/DealStatusChangesFilter'
import DealStatusChangesFiltersContextProvider from '../../contexts/DealStatusChangesFiltersContext/DealStatusChangesFiltersContextProvider'
import DealStatusChangesTable from './components/DealStatusChangesTable/DealStatusChangesTable'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import DealsStatusChangesFilterMobile from './components/DealsStatusChangesFilterMobile/DealsStatusChangesFilterMobile'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useDealStatusChangesView from './hooks/useDealStatusChangesView'

// TODO: Move to l10n
const DealStatusChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useDealStatusChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <DealStatusChangesContextProvider>
            <DealStatusChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<DealsMenu />}
                    secondSidebar={<DealStatusChangesFilter />}
                    secondSidebarMobile={<DealsStatusChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <DealStatusChangesTable />
                </Page>
            </DealStatusChangesFiltersContextProvider>
        </DealStatusChangesContextProvider>
    )
}

export default DealStatusChanges
