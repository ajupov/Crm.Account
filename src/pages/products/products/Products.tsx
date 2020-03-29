import React, { FC, useEffect } from 'react'

import Page from '../../../components/page/Page'
import { setPageTitle } from '../../../utils/page/pageUtils'

const title = 'Продукты'

const Products: FC = () => {
    useEffect(() => setPageTitle(title), [])

    return <Page title={title}></Page>
}

export default Products
