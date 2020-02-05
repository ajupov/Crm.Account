import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Leads: FC = () => {
    useEffect(() => {
        document.title = 'Лиды'
    })

    return (
        <Layout>
            <h1>Лиды</h1>
        </Layout>
    )
}
