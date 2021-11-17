import React, { FC, useEffect } from 'react'

import Page from '../../../../../components/common/grids/Page/Page'
import SupplierCommentContextProvider from '../../contexts/SupplierCommentContext/SupplierCommentContextProvider'
import SupplierComments from '../SupplierComments/SupplierComments'
import SupplierCommentsContextProvider from '../../contexts/SupplierCommentsContext/SupplierCommentsContextProvider'
import SupplierContextProvider from '../../contexts/SupplierContext/SupplierContextProvider'
import SupplierDelete from '../SupplierDelete/SupplierDelete'
import SupplierRestore from '../SupplierRestore/SupplierRestore'
import SupplierViewForm from './SupplierViewForm'
import SuppliersActionsContextProvider from '../../contexts/SuppliersActionsContext/SuppliersActionsContextProvider'
import SuppliersMenu from '../../../SuppliersMenu/SuppliersMenu'
import { setPageTitle } from '../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const SupplierView: FC = () => {
    const title = 'Просмотр поставщика'

    useEffect(() => setPageTitle(title), [])

    return (
        <SuppliersActionsContextProvider>
            <SupplierContextProvider>
                <SupplierCommentsContextProvider>
                    <SupplierCommentContextProvider>
                        <Page title={title} firstSidebar={<SuppliersMenu />}>
                            <SupplierViewForm />
                            <SupplierComments />
                            <SupplierDelete />
                            <SupplierRestore />
                        </Page>
                    </SupplierCommentContextProvider>
                </SupplierCommentsContextProvider>
            </SupplierContextProvider>
        </SuppliersActionsContextProvider>
    )
}

export default SupplierView
