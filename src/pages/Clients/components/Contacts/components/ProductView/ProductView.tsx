import React, { FC, useEffect } from 'react'

import ContactContextProvider from '../../contexts/ContactContext/ContactContextProvider'
import ContactDelete from '../ContactDelete/ContactDelete'
import ContactRestore from '../ContactRestore/ContactRestore'
import ContactsActionsContextProvider from '../../contexts/ContactsActionsContext/ContactsActionsContextProvider'
import ContactsMenu from '../../../ContactsMenu/ContactsMenu'
import Page from '../../../../../../components/common/grids/Page/Page'
import ProductViewForm from './ProductViewForm'
import { setPageTitle } from '../../../../../../helpers/productNameHelper'

// TODO: Move to l10n
const ProductView: FC = () => {
    const title = 'Просмотр продукта'

    useEffect(() => setPageTitle(title), [])

    return (
        <ContactsActionsContextProvider>
            <ContactContextProvider>
                <Page title={title} firstSidebar={<ContactsMenu />}>
                    <ProductViewForm />
                    <ContactDelete />
                    <ContactRestore />
                </Page>
            </ContactContextProvider>
        </ContactsActionsContextProvider>
    )
}

export default ProductView
