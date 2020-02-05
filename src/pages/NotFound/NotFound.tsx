import React, { FC, useEffect } from 'react'

import { NotFoundSegment } from './NotFoundSegment/NotFoundSegment'

export const NotFound: FC = () => {
    useEffect(() => {
        document.title = '404'
    })

    return <NotFoundSegment />
}
