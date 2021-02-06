import React, { FC, useEffect } from 'react'

import DealTypeChangesContextProvider from '../../contexts/DealTypeChangesContext/DealTypeChangesContextProvider'
import DealTypeChangesFilter from './components/DealTypeChangesFilter/DealTypeChangesFilter'
import DealTypeChangesFilterMobile from './components/DealTypeChangesFilterMobile/DealTypeChangesFilterMobile'
import DealTypeChangesFiltersContextProvider from '../../contexts/DealTypeChangesFiltersContext/DealTypeChangesFiltersContextProvider'
import DealTypeChangesTable from './components/DealTypeChangesTable/DealTypeChangesTable'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useDealTypeChangesView from './hooks/useDealTypeChangesView'

// TODO: Move to l10n
const DealTypeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useDealTypeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <DealTypeChangesContextProvider>
            <DealTypeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<DealsMenu />}
                    secondSidebar={<DealTypeChangesFilter />}
                    secondSidebarMobile={<DealTypeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <DealTypeChangesTable />
                </Page>
            </DealTypeChangesFiltersContextProvider>
        </DealTypeChangesContextProvider>
    )
}

export default DealTypeChanges
