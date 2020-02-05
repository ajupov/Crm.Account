import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Dashboard: FC = () => {
    useEffect(() => {
        document.title = 'Дашбоард'
    })

    return (
        <Layout>
            <h1>Дашбоард</h1>
        </Layout>
    )
}
