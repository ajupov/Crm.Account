import React, { FC, useEffect } from 'react'

import { Layout } from '../../components/Layout/Layout'

export const Contacts: FC = () => {
    useEffect(() => {
        document.title = 'Контакты'
    })

    return (
        <Layout>
            <h1>Контакты</h1>
        </Layout>
    )
}
