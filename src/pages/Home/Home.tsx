import React, { useEffect } from 'react'
import { NotAuthorizedLayout } from '../../layout/NotAuthorizedLayout/NotAuthorizedLayout'
import { AboutSegment } from './AboutSegment/AboutSegment'
import { MissionSegment } from './MissionSegment/MissionSegment'
import { NewsSegment } from './NewsSegment/NewsSegment'
import { FooterSegment } from './FooterSegment/FooterSegment'
import { HomeStyled } from './Home.styles'

export const Home = () => {
    useEffect(() => {
        document.title = 'LiteCRM'
    })

    return (
        <HomeStyled>
            <NotAuthorizedLayout>
                <MissionSegment />
                <AboutSegment />
                <NewsSegment />
                <FooterSegment />
            </NotAuthorizedLayout>
        </HomeStyled>
    )
}
