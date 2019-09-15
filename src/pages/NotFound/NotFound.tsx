import React, { useEffect } from 'react'
import { NotAuthorizedLayout } from '../../layout/NotAuthorizedLayout/NotAuthorizedLayout'
import { NotFoundSegment } from './NotFoundSegment/NotFoundSegment'

export const NotFound = () => {
    useEffect(() => {
        document.title = '404'
    })

    return (
        <NotAuthorizedLayout>
            <NotFoundSegment />
        </NotAuthorizedLayout>
    )
}
