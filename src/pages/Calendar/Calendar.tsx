import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Calendar: FC = () => {
    useEffect(() => {
        document.title = 'Календарь'
    })

    return (
        <Layout>
            <h1>Календарь</h1>
        </Layout>
    )
}
