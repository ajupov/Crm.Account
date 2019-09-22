import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Deals = () => {
    useEffect(() => {
        document.title = 'Сделки'
    })

    return (
        <AuthorizedLayout>
            <h1>Сделки</h1>
        </AuthorizedLayout>
    )
}
