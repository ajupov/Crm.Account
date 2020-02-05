import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Settings: FC = () => {
    useEffect(() => {
        document.title = 'Настройки'
    })

    return (
        <Layout>
            <h1>Настройки</h1>
        </Layout>
    )
}
