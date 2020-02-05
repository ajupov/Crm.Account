import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Activities: FC = () => {
    useEffect(() => {
        document.title = 'Задачи'
    })

    return (
        <Layout>
            <h1>Задачи</h1>
        </Layout>
    )
}
