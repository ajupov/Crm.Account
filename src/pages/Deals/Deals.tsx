import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Deals: FC = () => {
    useEffect(() => {
        document.title = 'Сделки'
    })

    return (
        <Layout>
            <h1>Сделки</h1>
        </Layout>
    )
}
