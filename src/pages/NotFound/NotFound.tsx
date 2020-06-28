import React, { FC, useEffect } from 'react'

import NotFoundPage from '../../components/common/grids/NotFoundPage/NotFoundPage'
import { setPageTitle } from '../../helpers/productNameHelper'

const NotFound: FC = () => {
    const title = '404'

    useEffect(() => setPageTitle(title), [])

    return <NotFoundPage text="Такой страницы нет" />
}

export default NotFound
