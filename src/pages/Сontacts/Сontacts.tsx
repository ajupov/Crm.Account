import React, { useEffect } from 'react'
import { AuthorizedLayout } from '../../layout/AuthorizedLayout/AuthorizedLayout'

export const Contacts = () => {
    useEffect(() => {
        document.title = 'Контакты'
    })

    return (
        <AuthorizedLayout>
            <h1>Контакты</h1>
        </AuthorizedLayout>
    )
}
