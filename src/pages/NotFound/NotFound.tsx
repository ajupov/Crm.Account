import React, { FC, useEffect } from 'react'

import NotFoundSegment from './NotFoundSegment'

const NotFound: FC = () => {
    useEffect(() => {
        document.title = '404'
    })

    return <NotFoundSegment />
}

export default NotFound
