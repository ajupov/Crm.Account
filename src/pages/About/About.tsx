import React, { useEffect } from 'react'
import { NotAuthorizedLayout } from '../../layout/NotAuthorizedLayout/NotAuthorizedLayout'
import { InfosSegment } from './InfosSegment/InfosSegment'

export const About = () => {
    useEffect(() => {
        document.title = 'О нас'
    })

    return (
        <NotAuthorizedLayout>
            <InfosSegment />
        </NotAuthorizedLayout>
    )
}
