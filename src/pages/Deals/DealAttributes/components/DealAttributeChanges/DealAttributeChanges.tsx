import React, { FC, useEffect } from 'react'

import DealAttributeChangesContextProvider from '../../contexts/DealAttributeChangesContext/DealAttributeChangesContextProvider'
import DealAttributeChangesFilter from './components/DealAttributeChangesFilter/DealAttributeChangesFilter'
import DealAttributeChangesFiltersContextProvider from '../../contexts/DealAttributeChangesFiltersContext/DealAttributeChangesFiltersContextProvider'
import DealAttributeChangesTable from './components/DealAttributeChangesTable/DealAttributeChangesTable'
import DealsAttributeChangesFilterMobile from './components/DealsAttributeChangesFilterMobile/DealsAttributeChangesFilterMobile'
import DealsMenu from '../../../DealsMenu/DealsMenu'
import Page from '../../../../../components/common/grids/Page/Page'
import { setPageTitle } from '../../../../../helpers/productNameHelper'
import useDealAttributeChangesView from './hooks/useDealAttributeChangesView'

// TODO: Move to l10n
const DealAttributeChanges: FC = () => {
    const title = 'История изменений'

    const { onClickCancel } = useDealAttributeChangesView()

    useEffect(() => setPageTitle(title), [])

    return (
        <DealAttributeChangesContextProvider>
            <DealAttributeChangesFiltersContextProvider>
                <Page
                    title={title}
                    firstSidebar={<DealsMenu />}
                    secondSidebar={<DealAttributeChangesFilter />}
                    secondSidebarMobile={<DealsAttributeChangesFilterMobile />}
                    onClickCancel={onClickCancel}
                >
                    <DealAttributeChangesTable />
                </Page>
            </DealAttributeChangesFiltersContextProvider>
        </DealAttributeChangesContextProvider>
    )
}

export default DealAttributeChanges
