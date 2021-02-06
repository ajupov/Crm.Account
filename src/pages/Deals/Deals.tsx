import React, { FC, useEffect } from 'react'

import DealsMenu from './DealsMenu/DealsMenu'
import Page from '../../components/common/grids/Page/Page'
import { setPageTitle } from '../../helpers/productNameHelper'

// TODO: Move to l10n
const Deals: FC = () => {
    const title = 'Сделки'

    useEffect(() => setPageTitle(title), [])

    return (
        <>
            <h1>Сделки</h1>

            <Page
                title={title}
                firstSidebar={<DealsMenu />}
                // secondSidebar={<LeadsFilter />}
                // secondSidebarMobile={<LeadsFilterMobile />}
            ></Page>
        </>
    )
}

export default Deals
