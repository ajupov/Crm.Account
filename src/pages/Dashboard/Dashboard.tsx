import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Dashboard = () => {
    useEffect(() => {
        document.title = 'Дашбоард'
    })

    return (
        <AuthorizedLayout>
            <h1>Дашбоард</h1>
        </AuthorizedLayout>
    )
}
