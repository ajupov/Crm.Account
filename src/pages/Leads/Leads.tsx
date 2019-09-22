import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Leads = () => {
    useEffect(() => {
        document.title = 'Лиды'
    })

    return (
        <AuthorizedLayout>
            <h1>Лиды</h1>
        </AuthorizedLayout>
    )
}
